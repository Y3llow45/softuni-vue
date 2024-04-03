import Vue from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue'

Vue.component('app-counter', Counter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
