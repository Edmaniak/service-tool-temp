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
      d="M1 31H31"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29 1H3C1.89543 1 1 1.89543 1 3V7C1 8.10457 1.89543 9 3 9H29C30.1046 9 31 8.10457 31 7V3C31 1.89543 30.1046 1 29 1Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 24C23 20.1 16 13 16 13C16 13 9 20.1 9 24C9 27.9 12.1 31 16 31C19.9 31 23 27.9 23 24Z"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 27.0001C14.3 27.0001 13 25.7001 13 24.0001C13.1 23.2001 14.3 21.2001 16 19.1001C17.7 21.2001 18.9 23.2001 19 24.1001C19 25.7001 17.7 27.0001 16 27.0001Z"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 9V31"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29 9V31"
      stroke-width="2"
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