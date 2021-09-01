<template>
  <div class="detail-header">
    <div class="detail-header__icon">
      <img src="../../assets/img/device-detail.svg" alt="">
    </div>
    <div class="detail-header__body">
      <h1 class="detail-header__title color-primary-text">{{ unit.name }}</h1>
      <p class="detail-header__type">{{ unit.type }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DetailHeader',
  props: {
    unit: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.detail-header {
  padding: 32px;
  background: #FFFFFF;
  display: flex;

  &__icon {
    height: 96px;
    width: 96px;
    background: $creme;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
  }

  &__title {
    font-weight: 600;
    font-size: 26px;
    line-height: 140%;
  }

  &__type {
    color: $neutral;
  }
}
</style>