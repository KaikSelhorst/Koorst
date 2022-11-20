<template>
  <section v-if="dadosApi" class="container">
    <!-- DadosApi é uma variavel que vem do Mixins[Api] -->
    <div>
      <TheTitulo class="titulo" :h1="dadosApi.title" :hasDecor="false">
        <p>{{ dadosApi.texto }}</p>
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
  },
};
</script>

<style scoped>
.titulo {
  margin-bottom: 40px;
}
p {
  font-family: "Eczar", serif;
  color: #292929;
  font-size: 1.5rem;
  position: relative;
  line-height: 2.25rem;
  max-width: 400px;
}
p::before {
  content: "";
  width: 2px;
  position: absolute;
  left: -16px;
  height: 100%;
  display: block;
  background: #292929;
}
</style>
