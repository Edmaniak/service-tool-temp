<template>
  <div class="app">
    <Navigation/>
    <TopBar/>
    <div class="app__main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import TopBar from '@/components/TopBar'
export default {
  name: 'MainLayout',
  components: {TopBar, Navigation}
}
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
  .app__main {
    background: $creme;
    min-height: 100vh;
    padding-left: 120px;
    padding-right: 45px;
    padding-top: 64px;
    padding-bottom: 200px;
  }
</style>