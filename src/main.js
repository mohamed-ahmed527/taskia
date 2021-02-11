import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import"../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import"../node_modules/@fortawesome/fontawesome-free/js/all.min.js";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import "jquery";