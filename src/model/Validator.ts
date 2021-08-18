import yaml from 'yaml'
import fs from 'fs'
import {ControllerConfig, ConfigValue} from '../types/ControllerConfig'

type BoardType = number
type BoardSerial = number
export type ConnectedBoards = Record<BoardType, Array<BoardSerial>>

type MethodName = string
type Method = (x: ConfigValue, y: ConfigValue | Array<string>) => boolean

enum ConditionType {
    equal = 'equal',
    in_list = 'in_list',
    greater = 'greater',
    smaller = 'smaller',
}

const methods: Record<MethodName, Method> = {
    'equal': (x, y) => x == y,
    'in_list': (el, list) => {
        if (typeof (list) === 'number') throw TypeError('Error')
        if (typeof (list) === 'boolean') throw TypeError('Error')
        if (typeof (list) === 'string') throw TypeError('Error')
        if (typeof (el) !== 'string') throw TypeError('Error')
        return list.indexOf(el) >= 0
    },
    'greater': (x, y) => (x > y),
    'smaller': (x, y) => (x < y)
}

type Condition = {
    type: ConditionType,
    variable: string,
    value: ConfigValue,
    negative: boolean,
}

enum CriteriaLevel {
    success = 'success',
    error = 'error',
    warning = 'warning',
    info = 'info',
}

enum CriteriaCheckResult {
    unused = 'unused',
    success = 'success'
}

type CriteriaResult = CriteriaLevel | CriteriaCheckResult

type Criteria = {
    id: number,
    level: CriteriaLevel,
    name: string,
    description?: string
    preconditions?: Array<Condition>
    conditions?: Array<Condition>
}

enum MappingReaction {
    use = 'use',
    override = 'override',
    skip = 'skip',
    exception = 'exception',
}

type InputName = string
type OutputName = string

type Mapping = {
    board: string,
    pin: string,
    name: string,
    priority?: number,
    type: string,
    invert?: boolean
    input?: InputName
    output?: OutputName
}

type MappingRule = {
    id: number,
    name: string,
    conditions?: Array<Condition>,
    mappings?: Array<Mapping>
}

type MappingRuleResolved = MappingRule & {
    used: boolean
}

enum BoardOptionality {
    optional = 'optional',
    required = 'required',
}

type BoardName = string
type PinName = string

type Board = {
    optional: BoardOptionality,
    outputs: Record<PinName, Mapping>,
    inputs: Record<PinName, Mapping[]>,
    serial: number | null,
    type: BoardType
}

export type Boards = Record<BoardName, Board>

type MappingResult = {
    rules: MappingRuleResolved[],
    used_rules: MappingRuleResolved[],
    inputs: Record<InputName, Mapping>,
    outputs: Record<BoardName, Record<PinName, Mapping>>,
    boards: Boards,
    errors: Array<string>
}

type BoardTypes = Record<BoardName, BoardType>

type Rules = {
    version: number,
    build: string
    condition_types: Array<string>
    board_types: BoardTypes
    criterias: Array<Criteria>
    mapping_rules: Array<MappingRule>
}

const rules = yaml.parse(fs.readFileSync(__dirname + '/../../data/rules.yaml').toString()) as Rules

function convertPriority (priority?: number): number {
    if (!priority) return 0
    else return priority
}

export default class Validator {
    static check_conditions (conditions: Condition[] | undefined, config: ControllerConfig): Array<string> | null {
        if (conditions == undefined) return null
        if (config == undefined) return ['Config is undefined']

        const fails: Array<string> = []

        conditions.forEach(c => {
            const method = methods[c.type]
            if (method == undefined) {
                fails.push('Condition type "' + c.type + '" not found')
                return
            }
            if (config[c.variable] == undefined) {
                fails.push('Variable config[' + c.variable + '] is not available (undefined)')
                return
            }

            let result = method(config[c.variable], c.value)
            if (c.negative) result = !result;

            if (!result) {
                fails.push('Condition not fullfiled')
                return
            }
        })

        return fails.length > 0 ? fails : null
    }

    static checkCriteria (criterium: Criteria, config: ControllerConfig): CriteriaResult {
        if (this.check_conditions(criterium.preconditions, config) != null) return CriteriaCheckResult.unused
        const result = this.check_conditions(criterium.conditions, config)
        if (result != null) return criterium.level
        return CriteriaCheckResult.success
    }

    static resolveCriteria (criterias: Criteria[], config: ControllerConfig): Record<string, Criteria[]> {
        const output: Record<string, Criteria[]> = {
            success: [],
            error: [],
            warning: [],
            info: [],
            criterias: [],
        }

        output.criterias = criterias.map(criterium => {
            const check_result = this.checkCriteria(criterium, config)
            const resolved_criterium = {...criterium, result: check_result}

            let output_level = output[criterium.level]
            if (output_level == undefined) output_level = output.error
            if ((check_result != CriteriaCheckResult.unused) && (check_result != CriteriaCheckResult.success)) output_level.push(criterium)
            return resolved_criterium
        })

        return output
    }

    static collision_check (old_m: Mapping, new_m: Mapping): MappingReaction {
        if (typeof (old_m) == 'undefined') return MappingReaction.use //No collision
        if (convertPriority(old_m.priority) > convertPriority(new_m.priority)) return MappingReaction.skip
        if (old_m.priority == new_m.priority) return MappingReaction.exception
        return MappingReaction.override
    }

    static mapping_used (m: MappingRule, config: ControllerConfig): boolean {
        return this.check_conditions(m.conditions, config) == null
    }

    static require_board (boards: Record<BoardName, Board>, boardName: BoardName, optional: boolean, board_types: BoardTypes): void {
        if (boards[boardName] == undefined) {
            boards[boardName] = {
                optional: BoardOptionality.optional,
                outputs: {},
                inputs: {},
                serial: null,
                type: board_types[boardName]
            }
        }
        if (!optional) boards[boardName].optional = BoardOptionality.required
    }

    static resolve_mappings (mapping_rules: MappingRule[], config: ControllerConfig, board_types: BoardTypes): MappingResult {
        const result_mappings: MappingResult = {
            rules: [],
            used_rules: [],
            inputs: {},
            outputs: {},
            boards: {},
            errors: []
        }

        if (!mapping_rules) return result_mappings
        let mappings: Mapping[] = []

        result_mappings.rules = mapping_rules.map(rule => {
            const resolved_rule = {...rule} as MappingRuleResolved
            resolved_rule.used = this.mapping_used(rule, config)
            if (resolved_rule.used && rule.mappings) mappings = mappings.concat(rule.mappings)
            if (resolved_rule.used) result_mappings.used_rules.push(resolved_rule)
            return resolved_rule
        })

        mappings.forEach(m => {
            const optional = m.priority ? (m.priority > 0) : false
            if (m.input) {//Input rule
                const old = result_mappings.inputs[m.input]
                const colision_check = this.collision_check(old, m)
                switch (colision_check) {
                    case MappingReaction.skip:
                        break;
                    case MappingReaction.exception:
                        result_mappings.errors.push('Colision check (' + old.board + '.' + old.pin + ',' + m.board + '.' + m.pin + ')->' + m.input + ': Exception')
                        break;
                    case MappingReaction.use:
                        this.require_board(result_mappings.boards, m.board, optional, board_types)
                        if (result_mappings.boards[m.board].inputs[m.pin] == undefined) result_mappings.boards[m.board].inputs[m.pin] = []
                        result_mappings.boards[m.board].inputs[m.pin].push(m)
                        result_mappings.inputs[m.input] = m
                        break;
                    case MappingReaction.override: {
                        const old_inputs_mappings = result_mappings.boards[old.board].inputs[old.pin]

                        old_inputs_mappings.splice(old_inputs_mappings.indexOf(old), 1)
                        if (!old_inputs_mappings.length) {
                            delete result_mappings.boards[old.board].inputs[old.pin]
                        }

                        this.require_board(result_mappings.boards, m.board, optional, board_types)
                        if (result_mappings.boards[m.board].inputs[m.pin] == undefined) result_mappings.boards[m.board].inputs[m.pin] = []
                        result_mappings.boards[m.board].inputs[m.pin].push(m)
                        result_mappings.inputs[m.input] = m
                        break;
                    }
                }
            }
            if (m.output) {//Output rule
                const board_outputs = result_mappings.outputs[m.board] || {}
                const old = board_outputs[m.pin]
                const colision_check = this.collision_check(old, m)
                switch (colision_check) {
                    case MappingReaction.skip:
                        break;
                    case MappingReaction.exception: {
                        result_mappings.errors.push('Colision check (' + old.output + ',' + m.output + ')->' + m.board + '.' + m.pin + ': Exception')
                        break;
                    }
                    case MappingReaction.use:
                    case MappingReaction.override:
                        this.require_board(result_mappings.boards, m.board, optional, board_types)
                        board_outputs[m.pin] = m
                        result_mappings.boards[m.board].outputs = board_outputs
                        result_mappings.outputs[m.board] = board_outputs
                        break;
                }
            }
        })
        return result_mappings
    }

    static async getRules (): Promise<Rules> {
        return rules
    }

    static validate (config: ControllerConfig): Record<string, Criteria[]> {
        return this.resolveCriteria(rules.criterias, config)
    }

    static mapping (config: ControllerConfig): MappingResult {
        return this.resolve_mappings(rules.mapping_rules, config, rules.board_types)
    }
}
