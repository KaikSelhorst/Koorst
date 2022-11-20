<template>
  <section v-if="dadosApi" class="container">
    <!-- DadosApi é uma variavel que vem do Mixins[Api] -->
    <div>
      <TheTitulo class="titulo" :h1="dadosApi.title" :hasDecor="true">
      </TheTitulo>
    </div>
    <div class="grid">
      <h2 class="m-1-r">Sobre</h2>
      <p v-html="dadosApi.texto" class="s-1-e"></p>
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
  margin-bottom: 96px;
  max-width: 430px;
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
