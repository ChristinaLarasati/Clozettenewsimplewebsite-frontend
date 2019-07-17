import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'Bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.config.productionTip=false
new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app')
// data: function () {
//   return {
//       active: 'Navbar',
//   };
// },

// methods: {
//   setActive: function (menu) {
//       this.active = menu;
//   },
// },
// });