<template>
  <section v-if="dadosApi">
    <div class="container">
      <!-- DadosApi é uma variavel que vem do Mixins[Api] -->
      <TheTitulo class="titulo" :h1="dadosApi.title" :hasDecor="true" />
      <div class="grid">
        <div>
          <img
            src="../assets/projetos_ilustracao.jpg"
            alt="Mockup simples da Koorst"
          />
        </div>
        <div class="projetos_texto">
          <h2 class="m-1-r c12">Projetos</h2>
          <p
            v-for="(frase, index) in dadosApi.texto"
            :key="index"
            v-html="frase"
            class="s-1-e c13"
          ></p>
        </div>
      </div>
      <ProjetosLista :projetos="dadosApi.projetos_list" class="projetosLista" />
    </div>
    <!-- componente não deve respeitar a .container -->
    <ProjetosConstrucao :construcao="dadosApi.construcao" />
    <div class="container contato">
      <span class="xs-2-r c8">Precisa de algum design ou desenvolvedor</span>
      <router-link :to="{ name: 'contato' }">
        <h1 class="xxl-1-r c12">Vamos trabalhar juntos</h1>
      </router-link>
    </div>
  </section>
</template>

<script>
import { api } from "@/mixins.js";
import ProjetosLista from "@/components/ProjetosLista.vue";
import ProjetosConstrucao from "@/components/ProjetosConstrucao.vue";

export default {
  name: "ProjetosView",
  mixins: [api],
  created() {
    this.getApi("projetos");
    document.title = "Projetos";
  },
  components: {
    ProjetosLista,
    ProjetosConstrucao,
  },
};
</script>

<style scoped>
.titulo {
  margin-bottom: 96px;
}
h2 {
  margin-bottom: 24px;
}

p {
  text-indent: 24px;
  display: block;
  max-width: 450px;
}
p + p {
  margin-top: 8px;
}
.grid {
  margin-bottom: 120px;
}

.contato {
  margin-top: 120px;
  margin-bottom: 96px;
  text-align: center;
}

.contato h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.contato h1::after {
  content: "";
  width: 48px;
  height: 48px;
  display: block;
  position: relative;
  background: url("../assets/seta.svg") no-repeat center;
}
</style>
