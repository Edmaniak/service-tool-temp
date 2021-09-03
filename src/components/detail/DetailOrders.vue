<template>
  <DetailCard :title="$t('detail.menu.orders')">
    <div class="detail-orders"></div>
  </DetailCard>
</template>

<script lang="ts">
import DetailCard from '@/components/detail/DetailCard.vue'
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'DetailOrders',
  components: {DetailCard},
})
</script>

<style lang="scss" scoped>

</style>