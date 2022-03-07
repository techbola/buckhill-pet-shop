<template>
  <v-app-bar app color="#4EC690" dark>
    <div class="logo d-flex align-center" @click="goHome">
      <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        src="../assets/images/logo.svg"
        transition="scale-transition"
        width="30"
      />

      <span><strong>PetStore</strong></span>
    </div>

    <nav>
      <ul>
        <li>
          <a>Products</a>
        </li>
        <li>
          <a>Promotions</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
      </ul>
    </nav>

    <div>
      <v-btn outlined class="ma-2 white--text">
        <v-icon left dark> mdi-cart </v-icon>
        Cart (0)
      </v-btn>
      <v-btn outlined class="ma-2 white--text" @click="showLoginModal">
        Login
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
    showLoginModal() {
      this.$emit("show-login");
    },
  },
};
</script>

<style scoped>
::v-deep .v-toolbar__content {
  display: flex;
  justify-content: space-around;
}
nav ul {
  display: flex;
  list-style: none;
}
nav ul li {
  margin-right: 1rem;
}
nav ul li a {
  color: #ffffff;
  text-transform: uppercase;
}

.logo:hover {
  cursor: pointer;
}
</style>
