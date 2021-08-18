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
      d="M18.1052 27.6719C18.1052 27.6719 19.7306 30.9986 22.4652 30.7479C28.0092 30.2412 27.6386 22.8719 29.6652 20.2692C27.9507 19.4155 26.0585 18.9795 24.1432 18.9969C22.228 19.0143 20.344 19.4845 18.6452 20.3692C15.7732 21.9919 15.5692 24.7306 18.1052 27.6719V27.6719Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.0268 24.2919C22.0268 24.2919 18.4268 24.7373 15.8628 30.9986"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.6667 31H4.66675C4.13632 31 3.62761 30.7893 3.25253 30.4142C2.87746 30.0391 2.66675 29.5304 2.66675 29V5.5C2.66675 4.96957 2.87746 4.46086 3.25253 4.08579C3.62761 3.71071 4.13632 3.5 4.66675 3.5H18.6667C19.1972 3.5 19.7059 3.71071 20.081 4.08579C20.456 4.46086 20.6667 4.96957 20.6667 5.5V16"
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