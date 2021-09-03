<template>
  <div
    v-if="unit"
    class="detail"
  >
    <router-link
      :to="{name: PageKeys.OVERVIEW}"
      class="detail__back"
    >
      <svg
        width="6"
        height="13"
        viewBox="0 0 6 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 1L1 6.5L5 12"
          stroke="#00418E"
          stroke-width="1.5"
        />
      </svg>
      <span>{{ $t('detail.backToOverview') }}</span>
    </router-link>
    <div class="detail__body" />
    <DetailHeader :unit="unit" />
    <DetailMenu v-model="menuItems" />
    <DetailInfo
      v-if="menuItems.unitInfo.active"
      :unit="unit"
    />
    <DetailServisBook
      v-if="menuItems.servisBook.active"
    />
    <DetailUserRequirements
      v-if="menuItems.userRequirements.active"
    />
    <DetailCommunication
      v-if="menuItems.communication.active"
    />
    <DetailOrders
      v-if="menuItems.orders.active"
    />
    <DetailLogs
      v-if="menuItems.logs.active"
    />
    <DetailConfiguration
      v-if="menuItems.configuration.active"
    />
    <DetailServisSettings
      v-if="menuItems.servisSettings.active"
    />
    <DetailUnitRegulation
      v-if="menuItems.unitRegulation.active"
    />
    <DetailMonitoring
      v-if="menuItems.monitoring.active"
    />
  </div>
</template>

<script lang="ts">
import {computed, defineAsyncComponent, defineComponent, onMounted, onUnmounted, ref, watch} from 'vue'
import {useRoute} from 'vue-router';
import Unit from '@/model/Unit';
import {useStore} from 'vuex';
import UnitDTO from '@/model/UnitDTO';
import {BrowserWindow} from '@electron/remote';
import DetailHeader from '@/components/detail/DetailHeader.vue';
import {useI18n} from 'vue-i18n';
import DetailMenu from '@/components/detail/DetailMenu.vue';
import DetailInfo from '@/components/detail/DetailInfo.vue';
import PageKeys from '@/enums/PageKeys';
import {eventHub} from '@/utils/Utils';
import Events from '@/enums/Events';
import DetailServisBook from '@/components/detail/DetailServisBook.vue';
import DetailUserRequirements from '@/components/detail/DetailUserRequirements.vue';
import DetailCommunication from '@/components/detail/DetailCommunication.vue';
import DetailOrders from '@/components/detail/DetailOrders.vue';
import DetailLogs from '@/components/detail/DetailLogs.vue';
import DynamicComponent from '@/components/DynamicComponent.vue';
import DetailConfiguration from '@/components/detail/DetailConfiguration.vue';
import DetailServisSettings from '@/components/detail/DetailServisSettings.vue';
import DetailUnitRegulation from '@/components/detail/DetailUnitRegulation.vue';
import DetailMonitoring from '@/components/detail/DetailMonitoring.vue';


export default defineComponent({
  name: 'UnitDetail',
  components: {
    DetailMonitoring,
    DetailUnitRegulation,
    DetailServisSettings,
    DetailConfiguration,
    DetailInfo,
    DetailServisBook,
    DetailUserRequirements,
    DetailCommunication,
    DetailOrders,
    DetailLogs,
    DetailMenu, DetailHeader
  },
  setup () {
    const {t} = useI18n()
    const store = useStore()
    const route = useRoute()
    const unitId = route.params.boardNumber.toString()

    const unit = computed<Unit>(() => store.state.units[unitId])

    const menuItems = ref({
      unitInfo: {title: t('detail.menu.unitInfo'), active: false, component: 'DetailInfo'},
      servisBook: {title: t('detail.menu.servisBook'), active: false, component: 'DetailServisBook'},
      userRequirements: {title: t('detail.menu.userRequirements'), active: false},
      communication: {title: t('detail.menu.communication'), active: false},
      orders: {title: t('detail.menu.orders'), active: false},
      logs: {title: t('detail.menu.logs'), active: false},
      configuration: {title: t('detail.menu.configuration'), active: false},
      servisSettings: {title: t('detail.menu.servisSettings'), active: false},
      unitRegulation: {title: t('detail.menu.unitRegulation'), active: false},
      monitoring: {title: t('detail.menu.monitoring'), active: false}
    })

    eventHub.$on(Events.WINDOW_INITIALIZED, () => {
      unit.value.connect()
    })

    onMounted(() => {
      if (unit.value) unit.value.connect()
    })

    onUnmounted(() => {
      if (unit.value) unit.value.disconnect()
    })

    const getComponent = (componentName: string) => {
      const a = defineAsyncComponent(() => import(`@/components/detail/${componentName}.vue`))
      console.log(a)
      return a
    }

    return {unit, menuItems, PageKeys, getComponent}
  }
})
</script>

<style lang="scss" scoped>
.detail {
  max-width: 1280px;
  padding-top: 48px;

  &__back {
    margin-bottom: 45px;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #00418E;
    span {
      margin-left: 20px;
      position: relative;
      top: 1px;
    }
  }

  &__header {
    background: #FFFFFF;
  }
}
</style>