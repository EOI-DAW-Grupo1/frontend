<template>
  <section>
    <div class="columns is-mobile is-centered">
      <div class="column is-half ">
        <h1 class="title">Login</h1>
        <b-field label="Email">
          <b-input type="email"></b-input>
        </b-field>
        <b-field label="Password">
          <b-input type="password" password-reveal></b-input>
        </b-field>
              <button class="button is-success" @click="login">
                Login
              </button>
          
           <h2 class="subtitle is-6">If you do not have an account, please <a class="tag is-info is-medium" href="/registro.html">register here</a></h2>
          </div>
      </div>
      
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          email: this.email,
          password: this.password,
        }
        
        const response = await this.$api.auth.login(this.email, this.password)

        const token = response.token        

        this.$store.dispatch('login', token)
    
        this.$router.push("/")
      } catch (error) {
        alert("Usuario y/o contraseña incorrectos.")
      }
    },
  },
};
</script>
