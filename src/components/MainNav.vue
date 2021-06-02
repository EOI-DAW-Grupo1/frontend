<template>
      <nav aria-label="main navigation" class="navbar is-orange-custom p-3" role="navigation">
    <div class="container">

        <div class="navbar-brand">
            <a class="navbar-item" href="/index.html">
                <div>
                    <!-- <span class="flaticon-pizza-1 mr-1"></span>Pizza
                    <small>Delicious</small> -->
                    <img src="https://www.meneame.net/img/mnm/logo-white.svg" alt="">
                </div>
            </a>
            <a aria-expanded="false" aria-label="menu" class="navbar-burger" data-target="navbarBasicExample"
               role="button">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <router-link exact-active-class="selected" class="navbar-item" v-for="(item, index) in items" :key="index" :to="item.path">
                    {{item.name}}
                </router-link>
        </div>
                <!-- <a class="navbar-item" href="/carta.html">Carta</a> -->
                <!-- <a class="navbar-item" href="/blog.html">Blog</a> -->
                <!-- <a class="navbar-item" href="/contacto.html">Contacto</a> -->
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a v-if="!isAuth" class="button is-warning is-outlined" href="registro.html">
                            <strong>Crear cuenta</strong>
                        </a>
                        <router-link v-if="!isAuth" class="button is-light is-outlined" to="/login">
                            Acceder
                        </router-link>
                        <a v-if="isAuth" class="button is-warning is-outlined" href="/my-orders">
                            <strong>Mis pedidos</strong>
                        </a>
                        <router-link v-if="isAuth" class="button is-light is-outlined" to="/profile">
                            {{currentUser.firstname}}
                        </router-link>
                        <router-link v-if="showContinueOrderBtn" class="button is-light is-outlined" to="/menu">
                           Continuar compra ({{cartTotal | toMoney}})
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "MainNav",
    props: {
        items: Array
    },
    computed: {
        isAuth(){
            return this.$store.getters.isAuth
        },
        cartTotal(){
            return this.$store.getters.cartTotal
        },
        showContinueOrderBtn(){
            return this.cartTotal > 0 &&  this.$route.path !== '/menu'
        },
        currentUser(){
            return this.$store.getters.currentUser
        }
    }
}
</script>

<style>
    .is-orange-custom {
        background-color: rgb(199, 129, 0);
    }
</style>