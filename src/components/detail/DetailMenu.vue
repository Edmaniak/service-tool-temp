<template>
  <div class="detail-menu">
    <ul class="detail-menu__list">
      <li @click="select(item)" :key="i" v-for="(item, i) in Object.values(modelValue)" class="detail-menu__item">
        <img v-if="item.active" src="../../assets/img/eye.svg" alt="">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {emit} from 'cluster';

export default defineComponent({
  name: 'DetailMenu',
  props: {
    modelValue: {
      type: Array
    }
  },
  setup (props) {
    const items = ref(props.modelValue)

    const select = (item: any) => {
      item.active = !item.active
      emit('update:modelValue', items.value)
    }

    return {items, select}
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.detail-menu {
  background: #FFFFFF;
  padding: 32px;
  margin-top: 24px;

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    font-weight: 600;
    height: 46px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 12px;
    font-size: 16px;
    border-radius: 6px;
    background: $creme;
    padding-left: 16px;
    cursor: pointer;
    padding-right: 16px;
    line-height: 165%;
    margin-bottom: 8px;

    &--active {

    }

    img {
      margin-right: 10px;
    }
  }
}
</style>