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
          <span class="settings-menu__placeholder"></span>
          <span>{{ item.title }}</span>
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

<style lang="scss" scoped>
.settings-menu {
  @import "../../assets/scss/variables";
  width: 290px;
  margin-top: 16px;

  &__title {
    font-size: 14px;
    margin-bottom: 16px;
    line-height: 100%;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    /* Primary / Dark Blue */
    color: $dark-blue
  }

  &__item {
    color: $dark-blue;
  }

  &__placeholder {
    margin-right: 16px;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid $dark-blue;
    position: relative;

    &:after {
      content: '';
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      position: absolute;
      left: 0;
      height: 1px;
      background: $dark-blue;
    }
  }

  &__link {
    padding: 16px 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 165%;
    display: flex;
    align-items: center;

    &.nav-item__link--active {
      background: rgba(0, 36, 79, 0.05)
    }
  }
}
</style>