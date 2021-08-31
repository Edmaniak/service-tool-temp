import { createStore } from 'vuex'
import Modals from '@/enums/Modals';
import DiscoveryApi from '@/api/DiscoveryApi';


type AppState = {
  activeModals: Array<Modals>;
  units: Array<any>
}


export enum Mutations {
  ADD_ACTIVE_MODAL = 'ADD_ACTIVE_MODAL',
  REMOVE_ACTIVE_MODAL = 'REMOVE_ACTIVE_MODAL',
  ADD_UNIT = 'ADD_UNIT',
}

export enum Getters {
  IS_MODAL_ACTIVE = 'IS_MODAL_ACTIVE',
}

export enum Actions {
  SCAN_IP = 'SCAN_IP'
}

export default createStore<AppState>({
  state: {
    activeModals: [],
    units: []
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
      commit(Mutations.ADD_UNIT, unit)
    }
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
    [Mutations.ADD_UNIT]: (_state, unit) => {
      _state.units.push(unit)
    }
  },
  getters: {
    [Getters.IS_MODAL_ACTIVE]: (_state) => (modalId: Modals) => {
      return _state.activeModals.includes(modalId)
    },
  }
})
