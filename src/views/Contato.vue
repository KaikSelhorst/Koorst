<template>
  <section class="container" v-if="dadosApi">
    <TheTitulo :h1="dadosApi.title" :hasDecor="true" />
    <p class="s-1-e">{{ dadosApi.texto }}</p>

    <ul v-if="dadosApi.redes">
      <li v-for="(rede, key) in dadosApi.redes" :key="key">
        <a :href="rede.url" target="_blank" class="s-4-r">{{ rede.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import { api } from "@/mixins.js";

export default {
  name: "ContatoView",
  mixins: [api],
  created() {
    this.getApi("contato");
    document.title = "Contato";
  },
};
</script>

<style scoped>
p {
  margin-top: 96px;
  margin-bottom: 24px;
  max-width: 500px;
  color: #141414;
}
ul {
  display: grid;
  gap: 8px;
}
a {
  color: #3d3d3d;
  display: inline-block;
  position: relative;
}
a::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 8px;
  background: currentColor;
  height: 1px;
  width: 100%;
}
</style>
