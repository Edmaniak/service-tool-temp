<template>
  <svg
    width="24"
    height="80"
    viewBox="0 0 24 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="9.5"
      cy="34"
      r="1.5"
      :fill="fill"
    />
    <circle
      cx="14.5"
      cy="34"
      r="1.5"
      :fill="fill"
    />
    <circle
      cx="9.5"
      cy="40"
      r="1.5"
      :fill="fill"
    />
    <circle
      cx="14.5"
      cy="40"
      r="1.5"
      :fill="fill"
    />
    <circle
      cx="9.5"
      cy="46"
      r="1.5"
      :fill="fill"
    />
    <circle
      cx="14.5"
      cy="46"
      r="1.5"
      :fill="fill"
    />
  </svg>
</template>

<script>
export default {
name: 'DragIcon',
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