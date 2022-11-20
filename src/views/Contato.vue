<template>
  <section class="container" v-if="dadosApi">
    <TheTitulo :h1="dadosApi.title" :hasDecor="true" />
    <p>{{ dadosApi.texto }}</p>

    <ul v-if="dadosApi.redes">
      <li v-for="(rede, key) in dadosApi.redes" :key="key">
        <a :href="rede.url" target="_blank">{{ rede.name }}</a>
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
  },
};
</script>

<style scoped>
p {
  margin-top: 96px;
  margin-bottom: 24px;
  font-family: "Eczar", serif;
  font-size: 1.125rem;
  line-height: 2rem;
  max-width: 500px;
  letter-spacing: 0.01rem;
  color: #141414;
}
ul {
  display: grid;
  gap: 8px;
}
a {
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  font-size: 1.125rem;
  line-height: 2rem;
  color: #3d3d3d;
  display: inline-block;
  position: relative;
  letter-spacing: 0.01rem;
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
