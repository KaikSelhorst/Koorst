<template>
  <section class="projetosLista" v-if="projetos" data-anime="left">
    <ul>
      <li v-for="(projeto, index) in projetos" :key="index">
        <a :href="projeto.src" target="_blank" class="projetoItem">
          <div class="projetoItemTexto">
            <span class="s-1-e c6">{{ projeto.data }}</span>
            <h3 class="l-1-r c13">{{ projeto.name }}</h3>
            <p class="s-1-e c13">{{ projeto.texto }}</p>
          </div>
          <span class="xxl-1-r c12">00{{ index + 1 }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ProjetosLista",
  props: {
    projetos: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped>
.projetosLista {
  margin-bottom: 80px;
  position: relative;
}
.projetosLista::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 100%;
  right: 140px;
  background: var(--c13);
  z-index: 200;
}
ul {
  padding: 40px 0;
}

.projetoItem {
  text-align: right;
  padding: 20px 10px;
  display: grid;
  position: relative;
  justify-items: end;
  grid-template-columns: 1fr minmax(auto, 200px);
  border-radius: 1px;
  transition: all 0.3s;
}
.projetoItem:hover {
  background: var(--c1);
}
li + li {
  margin-top: 100px;
}
.projetoItemTexto span {
  margin-bottom: 8px;
}
.projetoItemTexto p {
  max-width: 640px;
}

@media screen and (max-width: 600px) {
  .projetosLista::before {
    display: none;
  }
  .projetoItem {
    grid-template-columns: 1fr;
    padding: 36px 10px;
  }
  .projetoItem > span {
    position: absolute;
    left: 10px;
    top: 24px;
    font-size: 4rem;
    color: var(--c2);
  }
  ul li:nth-child(even) .projetoItem {
    background: var(--c1);
  }
}
</style>
