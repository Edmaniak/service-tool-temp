<template>
  <div
    v-if="errors.length > 0"
    class="form-error"
  >
    <p
      v-for="error in errors"
      :key="error"
      class="form-error__item"
    >
      {{ $t(`exceptions.${error?.toUpperCase()}`) }}
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'FormError',
  props: {
    errors: {
      type: Array as PropType<Array<string>>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.form-error {
  &__item {
    color: $error;
    margin-bottom: 5px;
  }
}
</style>