<template>
  <v-app>
    <Header @show-login="showLogin" />
    <v-main>
      <router-view />
    </v-main>
    <Footer />

    <!-- Login Dialog -->
    <Login
      :loginDialog="loginDialog"
      @show-register="showRegister"
      @forgot-password="forgotPassword"
      @close-login="loginDialog = false"
    />

    <!-- Register Dialog -->
    <Register
      :registerDialog="registerDialog"
      @show-login="showLogin"
      @close-register="registerDialog = false"
    />
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
    forgotPassword() {
      this.loginDialog = false;
      this.$router.push({ name: "ForgotPassword" });
    },
  },
};
</script>
