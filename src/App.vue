<template>
  <div
    v-if="brand"
    :class="`brand-atrea.cz`"
  >
   Service tool
  </div>
</template>
<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useStore} from 'vuex';
import InitializationLoader from '@/components/InitializationLoader.vue';
import {ElementQueries} from 'css-element-queries';

export default defineComponent({
  name: 'App',
  components: {InitializationLoader},
  setup () {
    const store = useStore()
    const connecting = computed(() => store.state.connecting)

    // Modal size checking due to dynamical overflow
    ElementQueries.listen();
    return {connecting, brand}
  }
})
</script>
<style src="@/assets/scss/style.scss" lang="scss"></style>

<style lang="scss">
/**
STATICALLY DEFINED BRANDING
 */

$brands: ('atrea', 'airflow');
$list: ('atrea-primary': #00418e, 'atrea-secondary':#E8850C, 'airflow-primary':#0081c3, 'airflow-secondary':#E8850C);
$colors: ('primary', 'secondary');
$types: ('text', 'bg', 'active', 'hover');

@each $brand in $brands {
  .brand-#{$brand} {
    @each $color in $colors {
      .color-#{$color}-text {
        color: map-get($list, #{$brand}-#{$color});
      }
      .color-#{$color}-bg {
        background: map-get($list, #{$brand}-#{$color}) !important;
      }
      .color-#{$color}-border {
        border-color: map-get($list, #{$brand}-#{$color}) !important;
      }
      .color-#{$color}-active-text {
        color: map-get($list, #{$brand}-#{$color});
      }
      .color-#{$color}-active-bg {
        background: map-get($list, #{$brand}-#{$color});
      }
      .color-#{$color}-hover-text {
        &:hover {
          color: map-get($list, #{$brand}-#{$color});
        }
      }
      .color-#{$color}-focus-border {
        &:focus {
          border-color: map-get($list, #{$brand}-#{$color}) !important;
        }
      }
      .color-#{$color}-hover-svg {
        &:hover {
          svg {
            fill: map-get($list, #{$brand}-#{$color}) !important;
          }
        }
      }
      .color-#{$color}-hover-bg {
        &:hover {
          background: map-get($list, #{$brand}-#{$color});
        }
      }
    }
    .secondary-menu {
      .nav-item__link--active {
        color: map-get($list, #{$brand}-primary);
      }
    }
  }
}


</style>

