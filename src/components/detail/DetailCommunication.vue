<template>
  <DetailCard :title="$t('detail.menu.communication')" >
    <div class="detail-communication"></div>
  </DetailCard>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import DetailCard from '@/components/detail/DetailCard.vue';

export default defineComponent({
  name: 'DetailCommunication',
  components: {DetailCard}
})
</script>

<style lang="scss" scoped>
  .detail-communication {

  }
</style>