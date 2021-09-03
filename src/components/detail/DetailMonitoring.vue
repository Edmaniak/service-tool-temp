<template>
  <DetailCard :title="$t('detail.menu.monitoring')">
    <div class="detail-monitoring"></div>
  </DetailCard>
</template>

<script lang="ts">
import DetailCard from '@/components/detail/DetailCard.vue'
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'DetailMonitoring',
  components: {DetailCard}
})
</script>

<style scoped lang="scss">
  .detail-monitoring {

  }
</style>