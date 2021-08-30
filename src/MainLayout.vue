<template>
  <div class="app">
    <Navigation/>
      <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'MainLayout',
  components: {Navigation}
}
</script>

<style scoped>

</style>