import Vue from 'vue'
import App from './App.vue'
import './directives/event'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
