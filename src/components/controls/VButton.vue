<template>
  <button
    :type="type"
    role="button"
    class="button color-primary-bg color-primary-text color-primary-border"
    :class="{'button--disabled': disabled}"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

export default defineComponent( {
  name: 'VButton',
  props: {
    type: {
      type: String as PropType<'button' | 'submit'>,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";
  .button {
    border-radius: 5px;
    font-weight: bold;
    padding: 1.6rem;
    border: none;
    font-size: 15px;
    line-height: 100%;
    text-align: center;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    max-width: 100vw;
    letter-spacing: 0.05em;
    outline: none;
    cursor: pointer;
    height: 48px;
    transition: all 0.1s;
    text-transform: uppercase;
    &--primary {
      color: #ffffff;
      box-shadow: 0px 10px 30px rgba(0, 65, 142, 0.1);
      &:hover {
        background: #B2BBC6 !important;
      }
    }
    &--secondary {
      color: $neutral;
      background: transparent !important;
      border: 1px solid $neutral !important;
      &:hover {
        background: transparent !important;
        color: #B2BBC6;
      }
    }
    &--disabled {
      background: #B2BBC6 !important;
      cursor: not-allowed;
    }
    &--white-border {
      background: transparent !important;
      border: 1px solid #FFF !important;
      &:hover {
        background: rgba(0,0,0,0.1) !important;
      }
    }
    &--smaller {
      font-size: 14px;
      height: 40px;
    }
    &--dashed {
      height: 8rem;
      cursor: pointer;
      border-style: dashed;
      border-width: 1px;
      display: flex;
      background: transparent !important;
      width: 100% !important;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 15px;
      line-height: 100%;
    }
    @media (max-width: $mobile-portrait) {
      font-size: 14px;
    }
  }
</style>