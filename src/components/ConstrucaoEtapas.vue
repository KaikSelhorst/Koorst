<template>
  <div class="etapas">
    <div class="etapas-header">
      <h4
        v-for="(etapa, key) in etapas"
        :key="etapa.title + key"
        @click="onClick(key)"
        data-tab="title"
      >
        <span>{{ key + 1 }}.</span>
        {{ etapa.title }}
      </h4>
      <span class="indicador-etapa" ref="indicador">indicador etapa</span>
    </div>
    <p
      v-for="(etapa, key) in etapas"
      :key="key"
      :aria-label="etapa.title"
      data-tab="content"
    >
      {{ etapa.texto }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ConstrucaoEtapas",
  props: {
    etapas: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      tabNav: {
        items: null,
        contents: null,
      },
    };
  },
  methods: {
    indicadorDeEtapaAcao(key) {
      const indicador = this.$refs.indicador;
      const indicadorX = indicador.getBoundingClientRect().x;
      const etapaX = this.tabNav.items[key].getBoundingClientRect().x;
      indicador.style.width = Math.ceil(etapaX - indicadorX + 60) + "px";
      return;
    },
    removerClasses(classe) {
      this.tabNav.items.forEach((item) => item.classList.remove(classe));
      this.tabNav.contents.forEach((item) => item.classList.remove(classe));
    },
    adicionarClass(index, classe) {
      this.tabNav.items[index].classList.add(classe);
      this.tabNav.contents[index].classList.add(classe);
    },
    onClick(key) {
      this.removerClasses("ativo");
      this.adicionarClass(key, "ativo");
      this.indicadorDeEtapaAcao(key);
    },
    getELementsTabNav() {
      this.tabNav.items = [...document.querySelectorAll("[data-tab='title']")];
      this.tabNav.contents = [
        ...document.querySelectorAll("[data-tab='content']"),
      ];
      return;
    },
  },
  mounted() {
    this.getELementsTabNav();
    this.onClick(0);
  },
};
</script>

<style scoped>
.etapas {
  margin-top: 140px;
  max-width: 560px;
  display: grid;
  gap: 24px 0px;
}
.etapas-header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 4px;
  border-bottom: 1px solid #a3a3a3;
  position: relative;
  gap: 0px 75px;
}
.indicador-etapa {
  text-indent: -150px;
  overflow: hidden;
  position: absolute;
  transition: all 0.3s;
  height: 3px;
  bottom: -4px;
  background: #a3a3a3;
  width: 60px;
}
.etapas p {
  display: none;
  font-size: 1.125rem;
  line-height: 2rem;
  font-family: "Eczar", serif;
  letter-spacing: 0.01rem;
  color: #a3a3a3;
  grid-column: 1 / -1;
  animation: fade 0.3s forwards;
}
@keyframes fade {
  from {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.etapas p.ativo {
  display: block;
}
.etapas h4 {
  display: flex;
  cursor: pointer;
  gap: 1px;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2rem;
  letter-spacing: 0.05rem;
  font-family: "Rubik", sans-serif;
  align-items: center;
  color: #3d3d3d;
}

.etapas h4.ativo {
  color: #f0f0f0;
}
</style>
