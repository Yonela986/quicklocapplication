

<template>
  <div id="app">
    <div id="img">
      <img alt="logo" src="./assets/quicloc8-logo.png">
     </div>
     <br/>
    <GoogleMap/>
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap.vue';

export default {
  name: 'App',
  components: {
    GoogleMap,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FF5722;
  margin-top: 60px;
}


</style>