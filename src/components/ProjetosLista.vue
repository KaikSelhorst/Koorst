<template>
  <section class="projetosLista" v-if="projetos">
    <ul>
      <li v-for="(projeto, index) in projetos" :key="index">
        <a href="" class="projetoItem">
          <div class="projetoItemTexto">
            <span>{{ projeto.data }}</span>
            <h3>{{ projeto.name }}</h3>
            <p>{{ projeto.texto }}</p>
          </div>
          <span>00{{ index + 1 }}</span>
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
  font-weight: 700;
  font-family: "Rubik", sans-serif;
  font-size: 3rem;
  letter-spacing: 0.05rem;
  line-height: 3.5rem;
}
.projetoItemTexto span {
  margin-bottom: 8px;
  font-size: 1.125rem;
  font-family: "Eczar", serif;
  line-height: 2rem;
  letter-spacing: 0.05rem;
  color: #a3a3a3;
}
.projetoItemTexto h3 {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  letter-spacing: 0.05rem;
  font-size: 2.25rem;
  line-height: 3rem;
  color: #141414;
}
.projetoItemTexto p {
  font-size: 1.125rem;
  line-height: 2rem;
  letter-spacing: 0.01rem;
  font-family: "Eczar", serif;
  max-width: 640px;
  color: #141414;
}
</style>
