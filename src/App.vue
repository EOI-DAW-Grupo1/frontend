<template>
  <div id="app">

    <MainNav :items="menuItems"  />

    <router-view/>

    <MainFooter />

  </div>
</template>

<script>
import MainNav from '@/components/MainNav'
import MainFooter from '@/components/MainFooter'
import {routes}  from '@/router'
export default {
  name: "App",
  data(){
    return {
     
    }
  },
  components:{
    MainNav,
    MainFooter
  },
  computed:{
    menuItems(){
      return routes.filter( item => !item.meta.hideInMenu )
    }
  },
  // mounted(){
  //   this.$api.sayHello()
  //   const token = localStorage.getItem('jwt-token')

  //   this.$store.dispatch('login',token)
  // }
}
</script>