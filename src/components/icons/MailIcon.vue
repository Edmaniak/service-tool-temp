<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5 0.5H1.5C0.6 0.5 0 1.1 0 2V4.1L12 10.85L24 4.25V2C24 1.1 23.4 0.5 22.5 0.5Z"
      :fill="fill"
    />
    <path
      d="M11.25 13.8498L0 7.5498V19.9998C0 20.8998 0.6 21.4998 1.5 21.4998H22.5C23.4 21.4998 24 20.8998 24 19.9998V7.5498L12.75 13.8498C12.33 14.0598 11.67 14.0598 11.25 13.8498Z"
      :fill="fill"
    />
  </svg>
</template>

<script>
export default {
  name: 'MailIcon',
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
      type: String,
      default: '24'
    }
  }
}
</script>

<style scoped>

</style>