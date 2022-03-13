<template>
  <v-app>
    <Header @show-login="showLogin" @show-settings-modal="showUserSettings" />
    <v-main>
      <router-view />
    </v-main>
    <Footer />

    <!-- Login Dialog -->
    <Login
      v-if="loginDialog"
      :loginDialog="loginDialog"
      @show-register="showRegister"
      @forgot-password="forgotPassword"
      @close-login="loginDialog = false"
    />

    <!-- Register Dialog -->
    <Register
      v-if="registerDialog"
      :registerDialog="registerDialog"
      @show-login="showLogin"
      @close-register="registerDialog = false"
    />

    <!-- User settings Dialog -->
    <UserSettings
      v-if="userSettingsDialog"
      :userSettingsDialog="userSettingsDialog"
      @close-user-settings="userSettingsDialog = false"
    />
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import UserSettings from "../components/UserSettings.vue";

export default {
  name: "App",
  data: () => ({
    loginDialog: false,
    registerDialog: false,
    userSettingsDialog: false,
  }),
  components: { Header, Footer, Login, Register, UserSettings },
  methods: {
    showUserSettings() {
      this.userSettingsDialog = true;
    },
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
