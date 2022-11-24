<template>
  <section class="titulo">
    <h1 :class="[{ dark: dark }, dark ? 'c1' : 'c12']" class="l-2-r">
      {{ h1 }}
    </h1>
    <div v-if="hasDecor" class="decorador">
      <img src="../assets/decor_dark.svg" alt="Decorador" v-if="dark" />
      <img src="../assets/decor.svg" alt="Decorador" v-else />
    </div>
    <div class="slot">
      <slot></slot>
    </div>
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
  margin-bottom: 96px;
}
.slot,
.decorador {
  justify-self: right;
}
h1 {
  max-width: 310px;
  text-transform: uppercase;
}
/* h1.dark {
  color: var(--c1);
} */
.decorador {
  margin-right: 120px;
}
</style>
