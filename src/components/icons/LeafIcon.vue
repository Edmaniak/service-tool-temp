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
      d="M9.00007 10.4C14.9001 4.5 30.0001 2 30.0001 2C30.0001 2 28.0001 16.6 21.6001 23C14.7001 29.9 6.70007 25.3 6.70007 25.3C6.70007 25.3 2.00007 17.4 9.00007 10.4Z"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 15L2 30"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
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