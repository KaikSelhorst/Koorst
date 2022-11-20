<template>
  <section class="construcao-bg" v-if="construcao">
    <div class="container">
      <TheTitulo :h1="construcao.title" :hasDecor="true" :dark="true" />
      <ConstrucaoEtapas :etapas="construcao.etapas" />
    </div>
  </section>
</template>

<script>
import ConstrucaoEtapas from "@/components/ConstrucaoEtapas.vue";
export default {
  name: "ProjetosConstrucao",
  components: {
    ConstrucaoEtapas,
  },
  props: {
    construcao: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped>
.construcao-bg {
  position: relative;
  background: #292929;
  width: 100%;
  padding: 85px 0;
  height: 100%;
}
</style>
