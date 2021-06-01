import axios from 'axios'
import Auth from './resources/auth'
import Order from './resources/orders'
import Product from './resources/products'


export default {
    install: (Vue, options) => {
        axios.defaults.baseURL = options.baseURL
        
        Vue.prototype.$api = {
            auth: new Auth(axios),
            products: new Product(axios),
            orders: new Order(axios)
        }
    }
}