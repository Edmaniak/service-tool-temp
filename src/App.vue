<template>
  <div
      v-if="brand"
      :class="`brand-atrea.cz`"
  >
    <router-view/>
  </div>
</template>
<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useStore} from 'vuex'
import {ElementQueries} from 'css-element-queries';
import {ipcRenderer} from 'electron';
import {BrowserWindow, getCurrentWindow} from '@electron/remote';
import Unit from '@/model/Unit';
import {eventHub} from '@/utils/Utils';
import Events from '@/enums/Events';

export default defineComponent({
  name: 'App',
  setup () {
    const store = useStore()
    const connecting = computed(() => store.state.connecting)
    const brand = 'atrea.cz'

    let lastMutationId = 0
    store.subscribe((mutation) => {
      mutation['id'] = lastMutationId
      console.log(mutation)
      BrowserWindow.getAllWindows().forEach((window: any) => {
        console.log(getCurrentWindow().id, window.id)
        if (getCurrentWindow().id !== window.id) {
          window.webContents.send('data-change', JSON.stringify(mutation))
        }
      })
      lastMutationId++
    })

    // Propagating state changes to all windows
    ipcRenderer.on(Events.STATE_CHANGED, (event, data) => {
      console.log('event')
      const mutation = JSON.parse(data)
      if (lastMutationId === mutation.id) {
        store.commit(mutation.type, mutation.payload)
      }
    })

    // Propagating state when opening new window
    ipcRenderer.on(Events.WINDOW_OPENED, (event, data) => {
      console.log('state replaced within initialization')
      const state = JSON.parse(data)
      store.replaceState(state)
      //@ts-ignore
      Object.keys(store.state.units).forEach((key: string) => store.state.units[key] = new Unit(store.state.units[key]))
      console.log(store.state)
      eventHub.$emit(Events.WINDOW_INITIALIZED)
    })

    // Refreshing connections

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

