import {getCurrentInstance} from 'vue';

/**
 * Looks for validation definition in parents (two iterations)
 */
export const useValidations = () => {
    //@ts-ignore
    const {proxy} = getCurrentInstance()
    let validations = proxy?.$parent
    for (let i = 0; i < 2; i++) {
        if (!validations.v$) {
            validations = validations.$parent
        } else {
            break
        }
    }
    return validations.v$ || null
}