<template>
  <section class="grid-container">
    <h2>Habilidades</h2>
    <div class="grid-container">
      <dl v-for="(value, key) in habilidades" :key="key">
        <dd class="indicador">0{{ key + 1 }}.</dd>
        <dt>{{ value.title }}</dt>
        <dd class="tool" v-for="tool in value.tools" :key="tool">{{ tool }}</dd>
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
  font-size: 1.125rem;
  line-height: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.01rem;
}
dt {
  color: #292929;
  margin-bottom: 24px;
}
.indicador {
  color: #a3a3a3;
}
.tool {
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  font-weight: 700;
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
