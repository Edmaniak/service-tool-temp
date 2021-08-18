<template>
  <svg
    :width="size"
    :height="size * 1.33333"
    viewBox="0 0 12 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 7.999C12 7.673 11.841 7.367 11.573 7.18L1.573 0.180005C1.269 -0.0339955 0.869 -0.0579955 0.538 0.112005C0.207 0.285004 0 0.626005 0 0.999005V15C0 15.373 0.207 15.715 0.538 15.887C0.869 16.057 1.268 16.033 1.573 15.819L11.573 8.81901C11.841 8.63301 12 8.32701 12 8.00101C12 8 12 8 12 7.999C12 8 12 8 12 7.999Z"
      :fill="fill"
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