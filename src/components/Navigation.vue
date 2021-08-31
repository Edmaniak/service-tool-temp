<template>
  <div class="navigation" :class="{'navigation--active': active}">
    <div class="navigation__logo">
      <img
          class="navigation__logo-img"
          src="../assets/img/atrea.cz.svg"
          alt="atrea.cz"
      >
      <span>{{ $t('layout.serviceTool') }}</span>
    </div>
    <div class="navigation__hamburger" @click="active = !active">
      <div></div>
      <div></div>
      <div></div>
      <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 6V0L0 3L5 6Z" fill="white"/>
      </svg>
    </div>
    <h3 class="navigation__header">{{ $t('layout.menu') }}</h3>
    <ul class="navigation__list">
      <li :key="item.to.name" v-for="item in items" class="navigation__item">
        <router-link class="navigation__link" :to="item.to">
          <img class="navigation__icon" :src="require(`../assets/img/menu/${item.to.name}.svg`)" :alt="item.title">
          <span class="navigation__title">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
    <h3 class="navigation__header">{{ $t('layout.favoriteUnits') }}</h3>
<!--    <ul class="navigation__list">
      <li :key="item.to.name" v-for="item in items" class="navigation__item">
        <router-link class="navigation__link" :to="item.to">
          <img class="navigation__icon" src="" alt="">
          <span class="navigation__title">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>-->
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import MenuItem from '@/model/ui/MenuItem';
import {useI18n} from 'vue-i18n';
import PageKeys from '@/enums/PageKeys';

export default defineComponent({
  name: 'Navigation',
  setup () {
    const {t} = useI18n()
    const active = ref<boolean>(false)
    const items: Array<MenuItem> = [
      {title: t('navigation.overview'), to: {name: PageKeys.OVERVIEW}},
      {title: t('navigation.logs'), to: {name: PageKeys.LOGS}},
      {title: t('navigation.forms'), to: {name: PageKeys.FORMS}},
      {title: t('navigation.communication'), to: {name: PageKeys.COMMUNICATION}},
      {title: t('navigation.orders'), to: {name: PageKeys.ORDERS}},
    ]
    return {active, items}
  }
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.navigation {
  padding: 24px 0;
  background: $dark-blue;
  color: #FFFFFF;
  width: 80px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3s;
  z-index: 2;

  &__logo {
    line-height: 165%;
    font-size: 12px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    margin-bottom: 109px;
    padding-left: 27px;
    opacity: 0;
    font-weight: 600;
    transition: all 0.3s;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    img {
      width: 200px;
      position: relative;
      left: -16px;
      margin-bottom: 1px;
    }
  }

  &__header {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0;
    margin-bottom: 29px;
    white-space: nowrap;
    padding-left: 27px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin-bottom: 109px;
  }

  &__link {
    display: flex;
    padding-left: 27px;
    align-items: center;
    color: #FFFFFF;
    height: 80px;
    font-weight: 600;
    font-size: 16px;
    position: relative;
    line-height: 165%;
    &.nav-item__link--active {
      background: rgba(255, 255, 255, 0.1);
      &:before {
        content: '';
        width: 4px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: #FFFFFF;
      }
    }
  }

  &__title {
    opacity: 0;
    transition: all 0.3s;
    white-space: nowrap;
  }

  &__icon {
    margin-right: 21px;
  }

  &__hamburger {
    position: absolute;
    top: 31px;
    left: calc((80px - 26px) / 2);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-direction: column;
    transition: all 0.3s;

    > div {
      width: 23px;
      background: #FFFFFF;
      height: 3px;
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    > svg {
      transition: all 0.3s;
      position: absolute;
      bottom: 0;
      top: 7px;
      right: -10px;
      transform: rotate(180deg);
    }
  }

  &--active {
    width: 320px;

    .navigation__title {
      opacity: 1;
    }

    .navigation__logo {
      opacity: 1;
    }

    .navigation__header {
      opacity: 0.5;
    }
    .navigation__hamburger {
      transform: translateX(267px);
      left: unset;
      > svg {
        right: unset;
        left: -10px;
        transform: none;
      }
    }
  }
}
</style>