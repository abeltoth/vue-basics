import Vue from 'vue'
import App from './App.vue'

// global directive
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

// hooks

/* bind: amikor a direcitve hozzá van csatolva egy elemhez */
/* inserted: amikor az element hozzáadódik a DOM-hoz */
/* update: amikor a komponens frissül (gyerekek nélkül) */
/* componentUpdated: amikor a komponens frissül (gyerekek is) */
/* unbind: amikor a direcitve törlődik */

new Vue({
  el: '#app',
  render: h => h(App)
})
