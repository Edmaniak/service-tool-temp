<template>
  <svg
    width="32"
    height="32"
    :stroke="stroke"
    viewBox="0 0 32 32"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 14L16 2L31 14"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 16V30H27V16"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 24L14 19L17 22L22 17"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 15H24V21L18 15Z"
      :fill="stroke"
    />
  </svg>
</template>

<script>
export default {
name: 'DefaultIcon',
  props: {
    fill: {
      type: String,
      default: 'none'
    },
    stroke: {
      type: String,
      default: '#00418E'
    }
  }
}
</script>

<style scoped>

</style>