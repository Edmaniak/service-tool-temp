<template>
  <div
      class="star"
      :class="{'star--disabled': disabled, 'star--true': modelValue, 'star--false': !modelValue}"
  >
    <div
        class="star__inner"
        @click="select"
    >
      <svg v-if="!modelValue" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1.34247L10.163 5.72547L15 6.42847L11.5 9.83997L12.326 14.6575L8 12.383L3.674 14.6575L4.5 9.83997L1 6.42847L5.837 5.72547L8 1.34247Z" stroke="#72869D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
      </svg>
      <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1.34247L10.163 5.72547L15 6.42847L11.5 9.83997L12.326 14.6575L8 12.383L3.674 14.6575L4.5 9.83997L1 6.42847L5.837 5.72547L8 1.34247Z" fill="#F6C144" stroke="#F6C144" stroke-miterlimit="10" stroke-linecap="square"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/icons/Icon.vue'
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'Star',
  components: {Icon},
  props: {
    modelValue: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, {emit}) {
    const active = ref<boolean>(props.modelValue)
    const select = () => {
      active.value = !active.value
      emit('update:modelValue', active.value)
      emit('change', active.value)
    }
    return {select}
  }
})
</script>
<style scoped lang="scss">
.star {
  cursor: pointer;

  &--disabled {
    cursor: not-allowed;

    .star__inner {
      pointer-events: none;
    }

  }
}
</style>