<template>
  <section>
    <div v-if="dadosApi" class="container" data-anime="left">
      <div>
        <TheTitulo :h1="dadosApi.title" :hasDecor="false">
          <p class="m-1-e c12">{{ dadosApi.texto }}</p>
        </TheTitulo>
        <div>
          <img src="../assets/home_ilustracao.jpg" alt="Koorst" />
        </div>
      </div>
    </div>
    <TheLoading v-else />
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
@media screen and (max-width: 800px) {
  p {
    margin-top: 16px;
    font: 400 1.125rem/2rem "Eczar", sans-serif;
    max-width: 70ch;
    letter-spacing: 0.01rem;
  }
  p::before {
    display: none;
  }
}
</style>
