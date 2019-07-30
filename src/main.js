import Vue from 'vue'
import App from './Login.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
axios.defaults.baseURL = 'http://localhost:8088';
axios.defaults.headers.common['content-security-policy'] = "default-src 'self'"
Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
