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
      d="M2.45702 26.4304L16.313 18.4304C15.1289 16.8693 13.4131 15.7971 11.491 15.417C9.5689 15.0369 7.57413 15.3754 5.88502 16.3684C4.18059 17.3348 2.89008 18.893 2.25822 20.7477C1.62636 22.6024 1.6971 24.6244 2.45702 26.4304Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.1692 26.4304L16.3132 18.4304C15.5706 20.238 15.5091 22.2537 16.1399 24.1034C16.7708 25.953 18.0512 27.511 19.7437 28.4881C21.4361 29.4653 23.4256 29.7953 25.3428 29.4168C27.2601 29.0384 28.975 27.9773 30.1692 26.4304Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.3132 2.43036V18.4304C18.2573 18.1855 20.0438 17.2357 21.3341 15.7611C22.6244 14.2865 23.3286 12.3897 23.3132 10.4304C23.3286 8.47103 22.6244 6.5742 21.3341 5.09961C20.0438 3.62502 18.2573 2.67522 16.3132 2.43036Z"
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