import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Meta from 'vue-meta'

Vue.use(Meta)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const app = new Vue({
   render: h => h(App)
}).$mount('#app')