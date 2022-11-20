<template>
  <section class="titulo">
    <h1 :class="{ dark: dark }">{{ h1 }}</h1>
    <div v-if="hasDecor" class="decorador">
      <img src="../assets/decor_dark.svg" alt="Decorador" v-if="dark" />
      <img src="../assets/decor.svg" alt="Decorador" v-else />
    </div>
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
    hasDecor: {
      type: Boolean,
      require: true,
    },
    dark: {
      type: Boolean,
      require: false,
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
.decorador {
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
h1.dark {
  color: #fafafa;
}
.decorador {
  margin-right: 120px;
}
</style>
