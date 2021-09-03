<template>
  <div class="settings">
    <div class="settings-menu">
      <SettingsMenu/>
    </div>
    <div class="settings-body">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import SettingsMenu from '@/pages/settings/SettingsMenu.vue';

export default defineComponent({
  name: 'Settings',
  components: {SettingsMenu},
  setup () {

   }
})
</script>

<style lang="scss" scoped>

</style>