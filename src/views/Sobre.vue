<template>
  <section v-if="dadosApi" class="container">
    <!-- DadosApi é uma variavel que vem do Mixins[Api] -->
    <div>
      <TheTitulo :h1="dadosApi.title" :hasDecor="true"> </TheTitulo>
    </div>
    <div class="grid">
      <h2 class="m-1-r c12">Sobre</h2>
      <p v-html="dadosApi.texto" class="s-1-e c13"></p>
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
p {
  margin-bottom: 96px;
  max-width: 430px;
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
@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
  p {
    max-width: 50ch;
    margin-top: 16px;
  }
  .habilidades {
    margin-bottom: 48px;
  }
}
</style>
