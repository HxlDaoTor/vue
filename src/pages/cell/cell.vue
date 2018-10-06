<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <cell></cell>

  </div>
</template>

<script>
import cell from '@/components/cell.vue'
export default {
  name: 'App',
  components: { cell }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
