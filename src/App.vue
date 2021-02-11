<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <Services></Services>
    <Why></Why>
    <Seamless></Seamless>
    <FotterComp></FotterComp>
    <router-view />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import Services from './components/Services.vue';
import Why from './components/Why.vue';
import Seamless from './components/Seamless.vue';
import FotterComp from './components/FotterComp.vue';

export default {
  name:"app",
  components:{HeaderComp, Services , Why, Seamless, FotterComp}
}
</script>
<style lang="scss">

.container{
  width: 80%;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-image: url(assets/taksia_assets/bg.png);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
