<template>
  <div class="overview">
    <div class="overview__activities" />
    <h2 class="overview__header">
      <span>{{ $t('overview.connectedUnits') }}</span>
      <span />
      <span
        class="overview__add"
        @click="openModal(Modals.ADD_NEW_UNIT_MODAL)"
      >
        {{ $t('overview.addNewUnit') }}
      </span>
    </h2>

    <div class="overview__units">
      <UnitCard
        v-for="unit in units"
        :key="unit.board_number"
        :unit="unit"
        @openWindow="openDetail(unit)"
      />
    </div>
    <h2 class="overview__header">
      <span>{{ $t('overview.favoriteUnits') }}</span>
      <span />
    </h2>
    <div
      v-if="units"
      class="overview__units"
    />
    <h2 class="overview__header">
      <span>{{ $t('overview.otherUnits') }}</span>
      <span />
    </h2>
    <div class="overview__units" />
    <AddNewUnitModal v-if="addNewUnitModalActive" />
  </div>
</template>

<script lang="ts">
import AddNewUnitModal from '@/components/modals/AddNewUnitModal.vue'
import {computed, defineComponent, onMounted} from 'vue'
import {openModal} from '@/utils/Utils';
import Modals from '@/enums/Modals';
import {Actions, Getters} from '@/store';
import {useStore} from 'vuex';
import UnitCard from '@/components/UnitCard.vue';
import UnitDTO from '@/model/UnitDTO';
import {ipcRenderer} from 'electron';
import WindowManager from '@/services/WindowManager';

const {BrowserWindow} = require('@electron/remote')
export default defineComponent({
  name: 'Overview',
  components: {UnitCard, AddNewUnitModal},
  setup () {
    const store = useStore()
    const units = computed<any>(() => Object.values(store.state.units))
    const addNewUnitModalActive = computed<boolean>(() => store.getters[Getters.IS_MODAL_ACTIVE](Modals.ADD_NEW_UNIT_MODAL))

    onMounted(() => {
      store.dispatch(Actions.SCAN_IP, '192.168.152.52:8211')
    })

    const openDetail = async (unit: UnitDTO) => {
      await WindowManager.openWindow(`http://localhost:8080/#/unit/${unit.board_number}`)
    }

    return {addNewUnitModalActive, openModal, Modals, units, openDetail}
  }
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.overview {
  padding-top: 33px;
  max-width: 950px;

  &__header {
    font-size: 14px;
    line-height: 160%;
    margin-top: 32px;
    color: $dark-blue;
    position: relative;
    margin-bottom: 12px;
    font-weight: 600;

    span:nth-child(2) {
      opacity: .8;
    }
  }

  &__add {
    font-weight: 800;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: $primary-blue;
    cursor: pointer;
    position: absolute;
    right: 0;
  }

  &__units {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }
}
</style>