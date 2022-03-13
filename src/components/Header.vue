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

    <div class="d-flex">
      <v-btn outlined class="ma-2 white--text">
        <v-icon left dark> mdi-cart </v-icon>
        Cart (0)
      </v-btn>
      <div v-if="user && user.token" class="d-flex">
        <v-btn outlined class="ma-2 white--text" @click="logout">
          Logout
        </v-btn>
        <v-img
          alt="Logo"
          class="profile-img shrink ml-2"
          contain
          src="../assets/images/profile.png"
          transition="scale-transition"
          width="40"
          @click="showUserSettingsModal"
        />
      </div>
      <v-btn v-else outlined class="ma-2 white--text" @click="showLoginModal">
        Login
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
    showLoginModal() {
      this.$emit("show-login");
    },
    showUserSettingsModal() {
      this.$emit("show-settings-modal");
    },
    ...mapActions({
      logout: "user/logout",
    }),
  },
  computed: {
    ...mapState({ user: "user" }),
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

.logo:hover,
.profile-img {
  cursor: pointer;
}
</style>
