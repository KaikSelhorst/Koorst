<template>
  <section v-if="dadosApi" class="container">
    <!-- DadosApi é uma variavel que vem do Mixins[Api] -->
    <div>
      <TheTitulo class="titulo" :h1="dadosApi.title" :hasDecor="true">
      </TheTitulo>
    </div>
    <div class="grid">
      <h2>Sobre</h2>
      <p v-html="dadosApi.texto"></p>
      <div class="sobre_img">
        <img
          src="../assets/sobre_ilustracao.jpg"
          alt="Mockup simples da Koorst"
        />
      </div>
    </div>
    <SobreHabilidades :habilidades="dadosApi.habilidades" class="habilidades" />
  </section>
</template>

<script>
import { api } from "@/mixins.js";
import SobreHabilidades from "@/components/SobreHabilidades.vue";

export default {
  name: "SobreView",
  mixins: [api],
  created() {
    this.getApi("sobre");
    document.title = "Sobre";
  },
  components: {
    SobreHabilidades,
  },
};
</script>

<style scoped>
.titulo {
  margin-bottom: 96px;
}
p {
  letter-spacing: 0.01rem;
  color: #141414;
  font-size: 1.125rem;
  margin-bottom: 96px;
  font-family: "Eczar", serif;
  line-height: 2em;
  color: #141414;
}
p::first-letter {
  font-size: 2rem;
}
.sobre_img {
  grid-column: 1/ -1;
  margin-bottom: 96px;
}

.habilidades {
  margin-bottom: 96px;
}
</style>
