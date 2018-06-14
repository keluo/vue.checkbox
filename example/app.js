import Vue from 'vue'
import App from './App.vue'
import Checkbox from '../src'
Vue.use(Checkbox)
new Vue({
  render: h => h(App)
}).$mount('#app')