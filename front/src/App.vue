<template>
  <div class="container" id="app">
   <navbar></navbar>
   
   <!-- <router-view></router-view> -->
   <login></login>
   <register></register>
   <footer></footer>
  </div>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Login from './components/Authentication/Login.vue'
import Register from './components/Authentication/Register.vue'
export default{
  components:{
    'Navbar': Navbar,
    'Footer': Footer,
    'Login': Login,
    'Register': Register,
  }
}
</script>

<style>

</style>