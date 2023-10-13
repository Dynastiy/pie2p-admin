import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/style.css";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// import CountryFlag from "vue-country-flag";
// Vue.component("country-flag", CountryFlag);

import "toastify-js/src/toastify.css";

// Plugins
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import $axios from "@/axios"
Vue.prototype.$axios = $axios

import { Icon } from "@iconify/vue2";
Vue.component("i-icon", Icon);

import toastify from 'toastify-js'
Vue.prototype.$toastify = toastify

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
