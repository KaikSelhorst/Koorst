import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sobre from "../views/Sobre.vue";
import Projetos from "../views/Projetos.vue";
import Contato from "../views/Contato.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: Sobre,
  },
  {
    path: "/projetos",
    name: "projetos",
    component: Projetos,
  },
  {
    path: "/contato",
    name: "contato",
    component: Contato,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
