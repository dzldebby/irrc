import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css' 
import VueRouter from 'vue-router'


Vue.use(Buefy)
Vue.use(VueRouter)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
