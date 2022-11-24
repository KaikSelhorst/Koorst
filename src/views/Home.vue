<template>
  <section v-if="dadosApi" class="container">
    <!-- DadosApi é uma variavel que vem do Mixins[Api] -->
    <div>
      <TheTitulo :h1="dadosApi.title" :hasDecor="false">
        <p class="m-1-e c12">{{ dadosApi.texto }}</p>
      </TheTitulo>
      <div>
        <img src="../assets/home_ilustracao.jpg" alt="Koorst" />
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/mixins.js";

export default {
  name: "HomeView",
  mixins: [api],
  created() {
    this.getApi("home");
    document.title = "Home";
  },
};
</script>

<style scoped>
p {
  position: relative;
  max-width: 400px;
}
p::before {
  content: "";
  width: 2px;
  position: absolute;
  left: -16px;
  height: 100%;
  display: block;
  background: var(--c12);
}
</style>
