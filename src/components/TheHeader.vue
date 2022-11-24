<template>
  <header class="header">
    <nav>
      <ul class="nav">
        <li>
          <ul>
            <li>
              <router-link
                :to="{ name: 'home' }"
                @mouseenter.native="handleClick"
                aria-label="Home"
              >
                <img src="../assets/koorst.svg" alt="Koorst" />
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'sobre' }"
                @mouseenter.native="handleClick"
                aria-label="Sobre"
              >
                <img src="../assets/usuario.svg" alt="Sobre" />
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'projetos' }"
                @mouseenter.native="handleClick"
                aria-label="Projetos"
              >
                <img src="../assets/arquivo.svg" alt="Projetos" />
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link
            to="/contato"
            @mouseenter.native="handleClick"
            aria-label="Contato"
          >
            <img src="../assets/telefone.svg" alt="Contato" />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ToolTip } from "@/helpers/index.js";
const toolTip = new ToolTip("tool_tip");

export default {
  name: "TheHeader",
  methods: {
    handleClick(event) {
      toolTip.init(event);
    },
  },
};
</script>

<style scoped>
.header {
  background: var(--c13);
  position: sticky;
  top: 0;
  align-self: flex-start;
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
</style>
