<template>
  <DetailCard :title="$t('detail.menu.unitRegulation')">
    <div class="detail-unit-regulation"></div>
  </DetailCard>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import DetailCard from '@/components/detail/DetailCard.vue';

export default defineComponent({
  name: 'DetailUnitRegulation',
  components: {DetailCard}
})
</script>

<style lang="scss" scoped>
  .detail-unit-regulation {

  }
</style>