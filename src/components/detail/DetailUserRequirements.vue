<template>
  <DetailCard :title="$t('detail.menu.userRequirements')">
    <div class="detail-user-requirements"></div>
  </DetailCard>
</template>

<script lang="ts">
import DetailCard from '@/components/detail/DetailCard.vue'
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'DetailUserRequirements',
  components: {DetailCard}
})
</script>

<style scoped lang="scss">
  .detail-user-requirements {

  }
</style>