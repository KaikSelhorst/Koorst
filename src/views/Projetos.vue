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
          <h2>Sobre</h2>
          <p
            v-for="(frase, index) in dadosApi.texto"
            :key="index"
            v-html="frase"
          ></p>
        </div>
      </div>
      <ProjetosLista :projetos="dadosApi.projetos_list" class="projetosLista" />
    </div>
    <!-- componente não deve respeitar a .container -->
    <ProjetosConstrucao :construcao="dadosApi.construcao" />
    <div class="container contato">
      <span>Precisa de algum design ou desenvolvedor</span>
      <router-link :to="{ name: 'contato' }">
        <h1>Vamos trabalhar juntos</h1>
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
  letter-spacing: 0.01rem;
  color: #141414;
  text-indent: 24px;
  font-size: 1.125rem;
  font-family: "Eczar", serif;
  line-height: 2em;
  color: #141414;
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
.contato span {
  color: #7a7a7a;
  font-family: "Rubik", sans-serif;
  letter-spacing: 0.05rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
.contato h1 {
  color: #292929;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  line-height: 4rem;
  font-family: "Rubik", sans-serif;
  letter-spacing: 0.05rem;
}
.contato h1::after {
  content: "";
  width: 40px;
  height: 40px;
  display: block;
  position: relative;
  background: url("../assets/seta.svg") no-repeat center;
}
</style>
