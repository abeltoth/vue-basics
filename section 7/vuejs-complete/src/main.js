import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue();

new Vue({
  el: '#app',
  /* template alternatívája, kirendereli a template-et majd helyettesíti azt amit az el:-el kiválasztottunk */
  render: h => h(App)
})
