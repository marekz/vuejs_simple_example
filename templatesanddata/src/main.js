import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

Vue.filter("currency", (value) => new Intl.NumberFormat("pl-PL", { style: "currency",
currency: "PLN" }).format(value));

new Vue({
  render: h => h(App),
}).$mount('#app')
