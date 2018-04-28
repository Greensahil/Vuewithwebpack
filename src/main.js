import Vue from 'vue'
import App from './App.vue'
import sahil from './sahil.vue'

Vue.component('sahil',sahil)

new Vue({
  el: '#app',
  render: h => h(App)
})
