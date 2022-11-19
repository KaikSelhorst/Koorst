<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    document.title = "Koorst";
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
#app {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 64px 1fr;
}

/* Warning is global */
#main {
  padding-top: 52px;
  padding-left: 200px;
}

.container,
.grid-container {
  max-width: 955px;
  /* Warning */
  /* margin: 0 auto; */
  /* Warning */
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

h2 {
  color: #292929;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-family: "Rubik", sans-serif;
  letter-spacing: 0.05rem;
  position: relative;
  font-weight: 500;
  text-transform: uppercase;
}
h2::before {
  content: "";
  position: absolute;
  display: block;
  width: 18px;
  height: 24px;
  left: -24px;
  background: url("./assets/decor_font.svg") no-repeat center;
}
</style>
