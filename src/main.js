import Vue from 'vue'
import App from './App.vue'
import router from './router'

// for alert
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
