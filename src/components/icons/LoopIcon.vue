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
      d="M19.5566 18.6626C21.5226 19.9973 23.8593 21.3333 25.3333 21.3333C28.2786 21.3333 30.6666 18.9453 30.6666 15.9999C30.6666 13.0546 28.2786 10.6666 25.3333 10.6666C21.3886 10.6666 10.6666 21.3333 6.66658 21.3333C3.72125 21.3333 1.33325 18.9453 1.33325 15.9999C1.33325 13.0546 3.72125 10.6666 6.66658 10.6666C8.23125 10.6666 10.7613 12.2039 12.7953 13.6146M12.7953 13.6146L11.2039 8.18661M12.7953 13.6146L7.36659 15.2059"
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