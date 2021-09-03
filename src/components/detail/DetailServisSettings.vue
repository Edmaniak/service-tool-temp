<template>
  <DetailCard :title="$t('detail.menu.servisSettings')">
    <div class="detail-servis-settings"></div>
  </DetailCard>
</template>

<script lang="ts">
import DetailCard from '@/components/detail/DetailCard.vue'
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'DetailServisSettings',
  components: {DetailCard}
})
</script>

<style scoped lang="scss">
  .detail-servis-settings {

  }
</style>