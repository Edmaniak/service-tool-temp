<template>
  <DetailCard description="lorem ipsum" :title="$t('detail.menu.unitInfo')">
    <div class="detail-info">
      <div class="detail-info__item" v-for="key in Object.keys(unit)">
        <div class="detail-info__key">{{ key }}</div>
        <div class="detail-info__value">{{unit[key]}}</div>
      </div>
    </div>
  </DetailCard>
</template>

<script lang="ts">
import DetailCard from './DetailCard.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'DetailInfo',
  components: {DetailCard},
  props: {
    unit: {
      type: Object,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.detail-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  &__key {
    color: $neutral;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
  }

  &__item {
    margin-bottom: 40px;
  }

  &__value {
    font-weight: 600;
    font-size: 16px;
    line-height: 165%;
    color: $primary-blue;
  }
}
</style>