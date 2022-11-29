import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TheTitulo from "./components/TheTitulo.vue";
import TheLoading from "./components/TheLoading.vue";

Vue.config.productionTip = false;

Vue.component("TheTitulo", TheTitulo);
Vue.component("TheLoading", TheLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
