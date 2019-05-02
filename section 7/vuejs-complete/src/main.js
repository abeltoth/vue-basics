import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  /* template alternatívája, kirendereli a template-et majd helyettesíti azt amit az el:-el kiválasztottunk */
  render: h => h(App)
})
