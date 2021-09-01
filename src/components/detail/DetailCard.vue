<template>
  <div class="detail-card" :class="{'detail-card--active': active}">
    <div class="detail-card__header">
      <h2 class="detail-card__title">{{title}}</h2>
      <p class="detail-card__description">{{description}}</p>
      <div @click="active = !active" class="detail-card__collapse">
        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00016 -8.70028e-05C8.23216 -8.70231e-05 8.46316 0.0799129 8.65116 0.240913L16.4102 6.89091L15.1082 8.40991L8.00016 2.31691L0.892157 8.40991L-0.409844 6.89091L7.34916 0.240913C7.53716 0.079913 7.76816 -8.69825e-05 8.00016 -8.70028e-05Z" fill="#72869D"/>
        </svg>
      </div>
    </div>

    <div class="detail-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'DetailCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
    }
  },
  setup () {
    const active = ref<boolean>(true)
    return {active}
  }
})
</script>

<style scoped lang="scss">
  @import "../../assets/scss/variables";
  .detail-card {
    background: #FFFFFF;
    margin-top: 24px;
    &--active {
      .detail-card__collapse {
        transform: none;
      }
      .detail-card__body {
        display: block;
      }
    }
    &__header {
      padding: 22px 32px;
      position: relative;
      border-bottom: 1px solid $light-gray;
    }
    &__collapse {
      position: absolute;
      top: 44%;
      cursor: pointer;
      right: 40px;
      margin: auto 0;
      transition: 0.2s all;
      transform: rotate(180deg) ;
    }
    &__title {
      font-weight: 600;
      font-size: 22px;
      margin-bottom: 4px;
      line-height: 140%;
    }
    &__description {
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      color: $neutral;
    }
    &__body {
      padding: 36px;
      display: none;
    }
  }
</style>