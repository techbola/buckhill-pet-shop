<template>
  <v-app>
    <Header @show-login-modal="showLogin" />
    <v-main>
      <router-view />
    </v-main>
    <Footer />

    <!-- Login Dialog -->
    <Login :loginDialog="loginDialog" @show-register="showRegister" />

    <!-- Register Dialog -->
    <Register :registerDialog="registerDialog" @show-login="showLogin" />
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
export default {
  name: "App",
  data: () => ({
    loginDialog: false,
    registerDialog: false,
  }),
  components: { Header, Footer, Login, Register },
  methods: {
    showLogin() {
      this.loginDialog = true;
      this.registerDialog = false;
    },
    showRegister() {
      this.loginDialog = false;
      this.registerDialog = true;
    },
  },
};
</script>
