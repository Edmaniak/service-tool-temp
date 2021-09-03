<template>
  <div>
    <component :is="componentLoader"/>
  </div>
</template>

<script lang="ts">
import {computed, defineAsyncComponent, defineComponent} from 'vue';

export default defineComponent({
  name: 'DynamicComponent',
  props: {
    componentFile: {
      required: true,
      type: String
    }
  },
  setup (props) {
    const componentLoader = computed(() => {
      return defineAsyncComponent(() => import(`${props.componentFile}.vue`))
    })
    return {componentLoader}
  }
})
</script>

<style scoped>

</style>