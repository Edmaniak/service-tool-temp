<template>
  <div v-if="unit" class="detail">
    <router-link :to="{name: PageKeys.OVERVIEW}" class="detail__back">{{$t('detail.backToOverview')}}</router-link>
    <DetailHeader :unit="unit"/>
    <DetailMenu v-model="menuItems"/>
    <DetailInfo :unit="unit" v-if="menuItems.unitInfo.active"/>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, onUnmounted, ref, watch} from 'vue'
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
import {Getters} from '@/store';
import {eventHub} from '@/utils/Utils';
import Events from '@/enums/Events';


export default defineComponent({
  name: 'UnitDetail',
  components: {
    DetailInfo,
    DetailMenu, DetailHeader
  },
  setup () {
    const {t} = useI18n()
    const store = useStore()
    const route = useRoute()
    const unitId = route.params.boardNumber.toString()

    const unit = computed<Unit>(() => store.state.units[unitId])

    const menuItems = ref({
      unitInfo: {title: t('detail.menu.unitInfo'), active: false},
      servisBook: {title: t('detail.menu.servisBook'), active: false},
      userRequirements: {title: t('detail.menu.userRequirements'), active: false},
      communication: {title: t('detail.menu.communication'), active: false},
      logs: {title: t('detail.menu.logs'), active: false},
      configuration: {title: t('detail.menu.configuration'), active: false},
      servisSettings: {title: t('detail.menu.servisSettings'), active: false},
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

    return {unit, menuItems, PageKeys}
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
  }

  &__header {
    background: #FFFFFF;
  }
}
</style>