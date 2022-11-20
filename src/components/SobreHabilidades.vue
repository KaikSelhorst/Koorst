<template>
  <section class="grid">
    <h2 class="m-1-r">Habilidades</h2>
    <div class="grid">
      <dl v-for="(value, key) in habilidades" :key="key">
        <dd class="indicador s-1-r">0{{ key + 1 }}.</dd>
        <dt class="s-1-r">{{ value.title }}</dt>
        <dd class="tool xs-1-r-t" v-for="tool in value.tools" :key="tool">
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
  font-family: "Rubik", sans-serif;
}
dt,
.indicador {
  color: #a3a3a3;
  text-transform: uppercase;
}
dt {
  color: #292929;
  margin-bottom: 24px;
}
.tool {
  color: #3d3d3d;
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
</style>
