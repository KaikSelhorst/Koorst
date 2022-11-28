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
@import url("./global.css");
* {
  margin: 0;
  padding: 0;
  list-style: none;
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
@media screen and (max-width: 976px) {
  #app {
    grid-template-columns: 1fr;
  }
}
#main {
  padding-top: 52px;
}

.container {
  max-width: 955px;
  margin: 0 auto;
  /* Warning */
  /* margin-left: 200px; */
  /* Warning */
}
@media screen and (max-width: 976px) {
  .container {
    padding: 0px 12px;
  }
}
.grid {
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
  position: relative;
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
