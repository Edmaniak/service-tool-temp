import { createStore } from 'vuex'
import Modals from '@/enums/Modals';
import DiscoveryApi from '@/api/DiscoveryApi';
import UnitDTO from '@/model/UnitDTO';
import WindowManager from '@/services/WindowManager';
import Unit from '@/model/Unit';


type AppState = {
  activeModals: Array<Modals>;
  units: Record<string, UnitDTO>;
  selectedUnit: Unit | null
  windowManager: WindowManager
}


export enum Mutations {
  ADD_ACTIVE_MODAL = 'ADD_ACTIVE_MODAL',
  REMOVE_ACTIVE_MODAL = 'REMOVE_ACTIVE_MODAL',
  ADD_UNIT = 'ADD_UNIT',
}

export enum Getters {
  IS_MODAL_ACTIVE = 'IS_MODAL_ACTIVE',
  GET_UNIT = 'GET_UNIT',
}

export enum Actions {
  SCAN_IP = 'SCAN_IP'
}

export default createStore<AppState>({
  state: {
    activeModals: [],
    units: {},
    selectedUnit: null,
    windowManager: new WindowManager()
  },

  actions: {
    [Actions.SCAN_IP]: async ({commit}, ip) => {
      const unit = await DiscoveryApi.scanIp(ip)
      console.log(unit)
      if (unit) {
        unit.target = {broadcast: 'abc', interface: ''}
        unit.link = {address: ip.split(':')[0]}
        unit.last_seen = new Date()
      }
      commit(Mutations.ADD_UNIT, new Unit(unit))
    },
  },
  mutations: {
    [Mutations.ADD_ACTIVE_MODAL]: (_state, modalId: Modals) => {
      if (!_state.activeModals.includes(modalId)) {
        _state.activeModals.push(modalId)
      }
    },
    [Mutations.REMOVE_ACTIVE_MODAL]: (_state, modalId: Modals) => {
      const index = _state.activeModals.findIndex(item => item === modalId)
      _state.activeModals.splice(index, 1)
    },
    [Mutations.ADD_UNIT]: (_state, unit: Unit) => {
      console.log(unit)
      _state.units[unit.board_number] = unit
    }
  },
  getters: {
    [Getters.IS_MODAL_ACTIVE]: (_state) => (modalId: Modals) => {
      return _state.activeModals.includes(modalId)
    },
    [Getters.GET_UNIT]: (_state) => (boardNumber: string) => {
      return _state.units[boardNumber]
    }
  }
})
