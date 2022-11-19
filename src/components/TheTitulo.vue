<template>
  <section class="titulo">
    <h1>{{ h1 }}</h1>
    <img src="../assets/decor.svg" alt="Decorador" v-if="hasDeCor" />
    <slot class="slot"></slot>
  </section>
</template>

<script>
export default {
  name: "TheTitulo",
  props: {
    h1: {
      type: String,
      require: true,
    },
    hasDeCor: {
      type: Boolean,
      require: true,
    },
  },
};
</script>

<style scoped>
.titulo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
}
.slot,
img {
  justify-self: right;
}
h1 {
  max-width: 310px;
  font-family: "Rubik", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  color: #292929;
  line-height: 2.375rem;
  letter-spacing: 0.05rem;
  font-weight: 700;
}

img {
  margin-right: 120px;
}
</style>
