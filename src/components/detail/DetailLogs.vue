<template>
  <DetailCard :title="$t('detail.menu.logs')">
    <div class="detail-logs"></div>
  </DetailCard>
</template>

<script lang="ts">
import DetailCard from '@/components/detail/DetailCard.vue'
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DetailLogs',
  components: {DetailCard}
})
</script>

<style scoped lang="scss">
.detail-logs {

}
</style>