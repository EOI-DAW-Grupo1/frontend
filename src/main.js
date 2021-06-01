import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PizzaAPI from './plugins/api/index'

Vue.use(PizzaAPI, {baseURL: 'https://pizza-delicious-api.herokuapp.com/'})

Vue.filter("toMoney", (money) => {
  return money.toLocaleString("es-ES", { style: "currency", currency: "EUR"})
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
