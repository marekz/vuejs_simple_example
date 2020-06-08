import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import ChildComponent from "./components/Child";
Vue.config.productionTip = false
Vue.component("child-component", ChildComponent);

Vue.filter("currency", (value) => new Intl.NumberFormat("pl-PL", { style: "currency",
currency: "PLN" }).format(value));

new Vue({
  render: h => h(App),
}).$mount('#app')
