<template>
  <section class="delicious-section contact-section">
    <div class="container mt-5">
      <div class="columns d-flex justify-content-center">
        <div class="column is-6">
          <div class="contact-form">
            <div class="columns is-multiline">
              <div class="column is-12">
                <h3>Login</h3>
                <p>
                  Please enter your email and password to process to the
                  customer area.
                </p>
                <p>If you have't an account please click</p>
              </div>
              <div class="column is-6">
                <div class="form-group">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div class="column is-6">
                <div class="form-group">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Your password"
                  />
                </div>
              </div>
            </div>
            <div class="form-group d-flex justify-content-center">
              <button class="button is-warning" @click="login">Login</button>
            </div>
          </div>
        </div>
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
    
        this.$router.push("/my-orders")
      } catch (error) {
        alert("Usuario y/o contraseña incorrectos.")
      }
    },
  },
};
</script>
