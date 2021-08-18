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
      d="M21 27H5C2.791 27 1 25.209 1 23V20H25V23C25 25.209 23.209 27 21 27Z"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25 20H31"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 5.5C11 6.32843 11.6716 7 12.5 7C13.3284 7 14 6.32843 14 5.5C14 4.67157 13.3284 4 12.5 4C11.6716 4 11 4.67157 11 5.5Z"
      :fill="stroke"
    />
    <path
      d="M11 14C11 14.8284 11.6716 15.5 12.5 15.5C13.3284 15.5 14 14.8284 14 14C14 13.1716 13.3284 12.5 12.5 12.5C11.6716 12.5 11 13.1716 11 14Z"
      :fill="stroke"
    />
    <path
      d="M14.5 10C14.5 10.8284 15.1716 11.5 16 11.5C16.8284 11.5 17.5 10.8284 17.5 10C17.5 9.17157 16.8284 8.5 16 8.5C15.1716 8.5 14.5 9.17157 14.5 10Z"
      :fill="stroke"
    />
    <path
      d="M7.5 10C7.5 10.8284 8.17157 11.5 9 11.5C9.82843 11.5 10.5 10.8284 10.5 10C10.5 9.17157 9.82843 8.5 9 8.5C8.17157 8.5 7.5 9.17157 7.5 10Z"
      :fill="stroke"
    />
    <path
      d="M18 5.5C18 6.32843 18.6716 7 19.5 7C20.3284 7 21 6.32843 21 5.5C21 4.67157 20.3284 4 19.5 4C18.6716 4 18 4.67157 18 5.5Z"
      :fill="stroke"
    />
    <path
      d="M4 5.5C4 6.32843 4.67157 7 5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5Z"
      :fill="stroke"
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