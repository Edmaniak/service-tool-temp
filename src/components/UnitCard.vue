<template>
  <div class="unit-card">
    <div class="unit-card__header">
      <router-link :to="{name: PageKeys.UNIT_DETAIL, params: {boardNumber: unit.board_number}}">
        <h3 class="unit-card__title color-primary-text">
          {{ unit.name }}
        </h3>
        <h3 class="unit-card__type">
          {{ unit.type }}
        </h3>
      </router-link>
      <div>
        <div
          class="unit-card__new-window"
          @click="$emit('openWindow')"
        >
          <img
            src="../assets/img/newWindow.svg"
            alt=""
          >
        </div>
        <Star />
      </div>
    </div>
    <div class="unit-card__body">
      <div>{{ unit.board_number }}</div>
      <div>{{ unit.addresses.enp4s0 }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Star from '@/components/controls/Star.vue';
import Unit from '@/model/Unit';
import PageKeys from '@/enums/PageKeys';

export default defineComponent({
  name: 'UnitCard',
  components: {Star},
  props: {
    unit: {
      type: Object as PropType<Unit>,
      required: true
    }
  },
  setup () {
    return {PageKeys}
  }
})
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables";
  .unit-card {
    background: #FFFFFF;
    padding: 24px;
    padding-bottom: 30px;
    &__header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid $light-gray;
      align-items: center;
    }
    &__new-window {
      cursor: pointer;
      img {
        height: 18px;
        margin-bottom: 5px;
      }
    }
    &__title {
      color: #00418E;
      font-weight: 600;
      font-size: 16px;
      line-height: 165%;
    }
    &__type {
      color: $neutral;
    }
    &__body {
      padding-top: 25px;
    }
  }
</style>