<template>
  <header class="header" ref="Header">
    <nav>
      <button
        :class="['btn-mobile', 'c1', { active: active }]"
        @click="openMenuMobile"
      >
        Menu
      </button>
      <ul class="nav" ref="navegacao">
        <li>
          <ul>
            <li>
              <the-tool-tip aria-label="Home">
                <router-link :to="{ name: 'home' }">
                  <img src="../assets/koorst.svg" alt="Koorst" />
                  <p class="c1 xs-2-r">Home</p>
                </router-link>
              </the-tool-tip>
            </li>
            <li>
              <the-tool-tip aria-label="Sobre">
                <router-link :to="{ name: 'sobre' }">
                  <img src="../assets/usuario.svg" alt="Sobre" />
                  <p class="c1 xs-2-r">Sobre</p>
                </router-link>
              </the-tool-tip>
            </li>
            <li>
              <the-tool-tip aria-label="Projetos">
                <router-link :to="{ name: 'projetos' }">
                  <img src="../assets/arquivo.svg" alt="Projetos" />
                  <p class="c1 xs-2-r">Projetos</p>
                </router-link></the-tool-tip
              >
            </li>
          </ul>
        </li>
        <li>
          <the-tool-tip aria-label="Contato">
            <router-link to="/contato">
              <img src="../assets/telefone.svg" alt="Contato" />
              <p class="c1 xs-2-r">Contato</p>
            </router-link>
          </the-tool-tip>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import TheToolTip from "@/components/TheToolTip.vue";
import { outsideClick } from "@/helpers/index.js";

export default {
  name: "TheHeader",
  data() {
    return {
      active: false,
    };
  },
  components: {
    TheToolTip,
  },
  methods: {
    openMenuMobile() {
      this.adicionarClasseAtiva();
      outsideClick(
        this.$refs.Header,
        ["click", "touchstart"],
        () => (this.active = false)
      );
    },
    adicionarClasseAtiva() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.header {
  background: var(--c13);
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  width: 64px;
  height: 100vh;
  grid-row: 1 / -1;
}
.nav {
  padding: 52px 0 36px 0;
  display: grid;
  min-height: 100vh;
}
.nav ul {
  display: grid;
  gap: 18px;
}

li:last-child {
  align-self: end;
}
a > p {
  display: none;
}
li a {
  display: flex;
  position: relative;
  justify-content: center;
  padding: 4px 0;
  align-items: center;
}
li a.router-link-exact-active::before {
  content: "";
  height: 100%;
  width: 2px;
  position: absolute;
  display: block;
  left: 0;
  background: var(--c1);
  border-radius: 0px 4px 4px 0px;
}
.btn-mobile {
  display: none;
}
@media screen and (max-width: 976px) {
  .header {
    position: fixed;
    background: transparent;
    height: auto;
    width: auto;
  }
  .nav {
    top: 0;
    left: 0;
    display: none;
    background: var(--c13);
    position: absolute;
    animation: fade 0.3s forwards;
  }
  li a {
    padding: 0.3rem 1rem;
    display: grid;
    grid-template-columns: 32px 1fr;
    gap: 4px;
  }
  a > p {
    display: block;
  }
  .btn-mobile {
    display: flex;
    background: var(--c13);
    margin-top: 4px;
    border: none;
    padding: 0.8rem 1rem;
    border-radius: 0 4px 4px 0;
    text-transform: uppercase;
    font-family: "Rubik", monospace;
    font-weight: 500;
    cursor: pointer;
    align-items: center;
    position: relative;
    z-index: 300;
  }
  .btn-mobile::before {
    margin-right: 4px;
    content: "";
    display: inline-block;
    height: 2px;
    width: 12px;
    background: #fff;
    box-shadow: 0 4px #fff, 0 -4px #fff;
    transition: transform 0.3s;
  }
  .btn-mobile.active::before {
    transform: rotate(90deg);
  }

  .btn-mobile.active + .nav {
    display: grid;
  }
}
</style>
