<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M8.00017 12.4099C8.23217 12.4099 8.46317 12.3299 8.65117 12.1689L16.4102 5.51892L15.1082 3.99992L8.00017 10.0929L0.892172 3.99992L-0.409828 5.51892L7.34917 12.1689C7.53717 12.3299 7.76817 12.4099 8.00017 12.4099Z"
        :fill="fill"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="matrix(1 0 0 -1 0 16)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
name: 'ExpandIcon',
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