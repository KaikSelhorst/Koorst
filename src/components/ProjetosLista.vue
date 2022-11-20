<template>
  <section class="projetosLista" v-if="projetos">
    <ul>
      <li v-for="(projeto, index) in projetos" :key="index">
        <a href="" class="projetoItem">
          <div class="projetoItemTexto">
            <span class="s-1-e">{{ projeto.data }}</span>
            <h3 class="l-1-r">{{ projeto.name }}</h3>
            <p class="s-1-e">{{ projeto.texto }}</p>
          </div>
          <span class="xxl-1-r">00{{ index + 1 }}</span>
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
  background: #141414;
}
ul {
  padding: 40px 0;
}

.projetoItem {
  text-align: right;
  padding: 20px 10px;
  display: grid;
  justify-items: end;
  border-radius: 1px;
  transition: all 0.3s;
}
.projetoItem:hover {
  background: #fafafa;
}
li + li {
  margin-top: 100px;
}
.projetoItem > span {
  grid-column: 2;
  color: #292929;
}
.projetoItemTexto span {
  margin-bottom: 8px;
  color: #a3a3a3;
}
.projetoItemTexto h3 {
  color: #141414;
}
.projetoItemTexto p {
  max-width: 640px;
  color: #141414;
}
</style>
