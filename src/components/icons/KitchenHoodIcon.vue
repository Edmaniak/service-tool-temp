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
      d="M23 4H9L1.48133 10.4286C1.17074 10.8169 1.00002 11.3114 1 11.8229V16.8571C1 17.4255 1.21071 17.9705 1.58579 18.3724C1.7715 18.5714 1.99198 18.7292 2.23463 18.8369C2.47728 18.9446 2.73736 19 3 19H29C29.5304 19 30.0391 18.7742 30.4142 18.3724C30.7893 17.9705 31 17.4255 31 16.8571V11.8229C31 11.3114 30.8293 10.8169 30.5187 10.4286L23 4Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.25 22.6963V25.6963C9.25 26.4919 8.93393 27.255 8.37132 27.8176C7.80871 28.3802 7.04565 28.6963 6.25 28.6963"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.75 22.6963V25.6963C22.75 26.4919 23.0661 27.255 23.6287 27.8176C24.1913 28.3802 24.9544 28.6963 25.75 28.6963"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.25 22.6963V30.6963"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 1V4H22V1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 15H11"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 15H17"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.09375 11.5L30.6726 11.5"
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