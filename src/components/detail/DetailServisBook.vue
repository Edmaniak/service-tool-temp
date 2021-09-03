<template>
  <DetailCard :title="$t('detail.menu.servisBook')">
    <div class="detail-servis-book"></div>
  </DetailCard>
</template>

<script lang="ts">
import DetailCard from '@/components/detail/DetailCard.vue'
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'DetailServisBook',
  components: {DetailCard}
})
</script>

<style lang="scss" scoped>
  .detail-servis-book {

  }
</style>