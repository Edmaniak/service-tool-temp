<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 11V5L4 8L0 11Z"
      :fill="fill"
    />
    <path
      d="M0 1H16V3H0V1Z"
      :fill="fill"
    />
    <path
      d="M6 5H16V7H6V5Z"
      :fill="fill"
    />
    <path
      d="M6 9H16V11H6V9Z"
      :fill="fill"
    />
    <path
      d="M0 13H16V15H0V13Z"
      :fill="fill"
    />
  </svg>
</template>

<script>
export default {
  name: 'DuplicateIcon',
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