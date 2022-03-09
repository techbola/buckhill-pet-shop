<template>
  <v-dialog v-model="loginDialog" max-width="600px" @click:outside="closeLogin">
    <v-card class="pa-6">
      <span class="close-icon" @click="closeLogin"
        ><v-icon> mdi-close </v-icon></span
      >
      <v-card-title class="flex-column">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="../assets/images/logo-modal.png"
          transition="scale-transition"
          width="60"
        />
        <div class="text-h6 mt-2">Log In</div>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                outlined
                placeholder="Email Address *"
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                placeholder="Password *"
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn
                block
                depressed
                color="primary white--text"
                @click="loginDialog = false"
              >
                Log In
              </v-btn>
            </v-col>
            <v-col cols="12" class="d-flex justify-space-between">
              <v-btn
                plain
                color="blue darken-3"
                @click="forgotPassword"
                class="text-capitalize"
                >Forgot password?</v-btn
              >
              <v-btn
                plain
                color="blue darken-3"
                @click="showRegisterModal"
                class="text-capitalize"
                >Don't have a account? Sign Up</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    loginDialog: Boolean,
  },
  methods: {
    showRegisterModal() {
      this.$emit("show-register");
    },
    forgotPassword() {
      this.$emit("forgot-password");
    },
    closeLogin() {
      this.$emit("close-login");
    },
  },
};
</script>

<style scoped>
.close-icon {
  position: absolute;
  right: 20px;
  cursor: pointer;
}
</style>
