<template>
  <DetailCard :title="$t('detail.menu.configuration')" >
    <div class="detail-configuration"></div>
  </DetailCard>
</template>

<script lang="ts">
import DetailCard from '@/components/detail/DetailCard.vue'
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'DetailConfiguration',
  components: {DetailCard}
})
</script>

<style lang="scss" scoped>
  .detail-configuration {

  }
</style>