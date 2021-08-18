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
      d="M14.6668 5.33329C15.2002 3.79996 16.6668 2.66663 18.4668 2.66663C20.6668 2.66663 22.4668 4.46663 22.4668 6.66663C22.4668 8.86663 20.6668 10.6666 18.4668 10.6666H1.3335"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.66683 26.6666C7.20016 28.1999 8.66683 29.3333 10.4668 29.3333C12.6668 29.3333 14.4668 27.5333 14.4668 25.3333C14.4668 23.1333 12.6668 21.3333 10.4668 21.3333H1.3335"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.8668 21.3333C23.4002 22.8666 24.8668 24 26.6668 24C28.8668 24 30.6668 22.2 30.6668 20C30.6668 17.8 28.8668 16 26.6668 16H1.3335"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
name: 'WindIcon',
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