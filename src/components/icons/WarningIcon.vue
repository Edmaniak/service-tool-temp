<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.2159 13.529L8.88189 1.65401C8.50589 0.948012 7.49389 0.948012 7.11689 1.65401L0.783885 13.529C0.428885 14.195 0.911885 15 1.66689 15H14.3339C15.0879 15 15.5709 14.195 15.2159 13.529ZM7.99989 13C7.44789 13 6.99989 12.552 6.99989 12C6.99989 11.448 7.44789 11 7.99989 11C8.55189 11 8.99989 11.448 8.99989 12C8.99989 12.552 8.55189 13 7.99989 13ZM8.99989 10H6.99989V6.00001H8.99989V10Z"
      :fill="fill"
    />
  </svg>
</template>

<script>
export default {
name: 'WarningIcon',
  props: {
    fill: {
      type: String,
      default: '#EA3D3D'
    },
    stroke: {
      type: String,
      default: '#00418E'
    },
    size: {
      type: Number,
      default: 12
    }
  }
}
</script>

<style scoped>

</style>