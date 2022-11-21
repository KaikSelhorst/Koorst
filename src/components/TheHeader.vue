<template>
  <header class="header">
    <nav>
      <ul class="nav">
        <li>
          <ul>
            <li>
              <router-link :to="{ name: 'home' }">
                <img src="../assets/koorst.svg" alt="Koorst" />
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'sobre' }">
                <img src="../assets/usuario.svg" alt="Sobre" />
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'projetos' }">
                <img src="../assets/arquivo.svg" alt="Projetos" />
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/contato">
            <img src="../assets/telefone.svg" alt="Contato" />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
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
  gap: 24px;
  justify-content: center;
}
.nav ul {
  display: grid;
  gap: 24px;
}
li {
  align-self: start;
}
li:last-child {
  align-self: end;
}
li a {
  display: block;
}
</style>
