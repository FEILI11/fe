
<template>
<HelloWorl msg="Welcome to Your Vue.js App" ms="wu peng peng"/>
<img alt="Vue logo" src="./assets/logo.png">

// <HelloWor/>

<HelloW/>


</template>

<script>
import HelloWorl from './components/HelloWorld.vue'
// import HelloWor from './components/image.vue'
import HelloW from './components/form.vue'

export default {
  name: 'App',
  components: {
    HelloWorl,
// HelloWor,
HelloW
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
