<template>
  <div class="etapas">
    <div class="etapas-header">
      <h4
        v-for="(etapa, key) in etapas"
        :key="etapa.title + key"
        @click="onClick(key)"
        data-tab="title"
        class="s-3-r c11"
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
      class="s-1-e c6"
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
      indicador.style.width = `${Math.ceil(etapaX - indicadorX + 60)}px`;
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
  border-bottom: 1px solid var(--c6);
  position: relative;
  column-gap: 75px;
}
.indicador-etapa {
  text-indent: -150px;
  overflow: hidden;
  position: absolute;
  transition: all 0.3s;
  height: 3px;
  bottom: -4px;
  background: var(--c6);
  width: 60px;
}
.etapas p {
  display: none;
  grid-column: 1 / -1;
  animation: fade 0.3s forwards;
}

.etapas p.ativo {
  display: block;
}
.etapas h4 {
  display: flex;
  cursor: pointer;
  gap: 1px;
  align-items: center;
}

.etapas h4.ativo {
  color: var(--c1);
}
@media screen and (max-width: 600px) {
  .etapas-header {
    column-gap: 32px;
  }
}
</style>
