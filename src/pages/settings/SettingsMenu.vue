<template>
  <div class="settings-menu">
    <h3 class="settings-menu__title">
      {{ $t('settings.title') }}
    </h3>
    <ul class="settings-menu__list">
      <li
        v-for="item in items"
        class="settings-menu__item"
      >
        <router-link
          class="settings-menu__link"
          :to="item.to"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MenuItem from '@/model/ui/MenuItem';
import PageKeys from '@/enums/PageKeys';
import {useI18n} from 'vue-i18n';

export default defineComponent({
  name: 'SettingsMenu',
  setup () {
    const {t} = useI18n()
    const items: Array<MenuItem> = [
      {title: t('settings.menu.account'), to: {name: PageKeys.SETTINGS_ACCOUNT}},
      {title: t('settings.menu.certificates'), to: {name: PageKeys.SETTINGS_CERTIFICATES}},
      {title: t('settings.menu.language'), to: {name: PageKeys.SETTINGS_LANGUAGE}},
      {title: t('settings.menu.contact'), to: {name: PageKeys.SETTINGS_CONTACT}},
      {title: t('settings.menu.update'), to: {name: PageKeys.SETTINGS_UPDATE}}
    ]
    return {items}
  }
})
</script>

<style scoped>

</style>