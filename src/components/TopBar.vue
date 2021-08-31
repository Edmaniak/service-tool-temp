<template>
  <div class="top-bar">
    <router-link :to="{name: PageKeys.SETTINGS}" class="top-bar__item">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.95 7.80006L21.6 4.65006L19.5 2.55006L16.35 4.20006C15.9 3.90006 15.3 3.75006 14.7 3.60006L13.5 6.10352e-05H10.5L9.3 3.45006C8.85 3.60006 8.25 3.75006 7.8 4.05006L4.65 2.40006L2.4 4.65006L4.05 7.80006C3.75 8.25006 3.6 8.85006 3.45 9.30006L0 10.5001V13.5001L3.45 14.7001C3.6 15.3001 3.9 15.7501 4.05 16.3501L2.4 19.5001L4.5 21.6001L7.65 19.9501C8.1 20.2501 8.7 20.4001 9.3 20.5501L10.5 24.0001H13.5L14.7 20.5501C15.3 20.4001 15.75 20.1001 16.35 19.9501L19.5 21.6001L21.6 19.5001L19.95 16.3501C20.25 15.9001 20.4 15.3001 20.55 14.7001L24 13.5001V10.5001L20.55 9.30006C20.4 8.85006 20.25 8.25006 19.95 7.80006ZM12 16.5001C9.45 16.5001 7.5 14.5501 7.5 12.0001C7.5 9.45006 9.45 7.50006 12 7.50006C14.55 7.50006 16.5 9.45006 16.5 12.0001C16.5 14.5501 14.55 16.5001 12 16.5001Z" fill="#72869D"/>
      </svg>
    </router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PageKeys from '@/enums/PageKeys';

export default defineComponent({
  name: 'TopBar',
  setup () {
    return {PageKeys}
  }
})
</script>

<style lang="scss" scoped>
  .top-bar {
    background: #FFFFFF;
    height: 64px;
    position: fixed;
    top: 0;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    left: 80px;
    width: calc(100vw - 80px);
    &__item {
      margin: 0 13px;
    }
  }
</style>