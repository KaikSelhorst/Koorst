<template>
  <section class="grid">
    <h2 class="m-1-r c12">Habilidades</h2>
    <div class="grid">
      <dl v-for="(value, key) in habilidades" :key="key">
        <dd class="indicador s-1-r c6">0{{ key + 1 }}.</dd>
        <dt class="s-1-r c12">{{ value.title }}</dt>
        <dd class="tool xs-1-r-t c11" v-for="tool in value.tools" :key="tool">
          {{ tool }}
        </dd>
      </dl>
    </div>
  </section>
</template>

<script>
export default {
  name: "SobreHabilidades",
  props: {
    habilidades: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 48px;
  grid-column: 1 / -1;
}
div {
  grid-column: 1 / -1;
}
dt,
.indicador {
  text-transform: uppercase;
}
dt {
  margin-bottom: 24px;
}
.tool::before {
  content: "";
  position: relative;
  display: inline-block;
  margin-right: 4px;
  width: 12px;
  height: 12px;
  background: url("../assets/decor_font_small.svg") no-repeat center;
}
@media screen and (max-width: 600px) {
  div {
    gap: 36px;
    grid-template-columns: 1fr;
  }
}
</style>
