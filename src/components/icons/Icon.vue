<template>
  <div
    :data-icon-id="icon"
    class="icon"
  >
    <component
      :is="comp"
      v-bind="{stroke, fill, size}"
    />
  </div>
</template>

<script>
import {computed, defineAsyncComponent, defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: true,
      default: 'Default'
    },
    fill: {
      type: String,
      default: 'none'
    },
    stroke: {
      type: String,
      default: '#00418E'
    },
    size: {
      type: String,
      default: '24'
    }
  },
  setup (props) {
    const icon = ref(props.icon)
    const comp = computed(() => {
      try {
        if (process.env.VUE_APP_SINGLE_CHUNK === 'true') {
          return defineComponent(require(`@/components/icons/${icon.value}Icon.vue`).default)
        } else {
          return defineAsyncComponent(() => import(`@/components/icons/${icon.value}Icon.vue`))
        }
      } catch (e) {
        return false
      }
    })
    return {comp}
  }
})
</script>

<style>
  .icon {
    display: flex;
    align-items: center;
  }
</style>