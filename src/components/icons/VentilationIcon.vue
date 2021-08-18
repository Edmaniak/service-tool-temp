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
      d="M26.875 22C28.2688 22.2502 29.6463 22.5842 31 23V5.00001C26.1244 3.60491 21.0708 2.9311 16 3.00001C10.9292 2.9311 5.87561 3.60491 1 5.00001V23C2.63847 22.5008 4.30899 22.1136 6 21.841"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.99995 29C13.9999 25 9.99995 21 9.99995 21C9.99995 21 5.99995 17 9.99995 13"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.9999 29C19.9999 25 15.9999 21 15.9999 21C15.9999 21 11.9999 17 15.9999 13"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.9999 29C25.9999 25 21.9999 21 21.9999 21C21.9999 21 17.9999 17 21.9999 13"
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