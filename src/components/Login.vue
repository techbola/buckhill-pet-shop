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
              <div v-if="error" class="red--text">{{ error }}</div>
              <validation-errors
                :errors="errors"
                v-if="errors"
              ></validation-errors>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                placeholder="Email Address *"
                required
                hide-details
                type="email"
                v-model="user.email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                placeholder="Password *"
                required
                hide-details
                type="password"
                v-model="user.password"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn block depressed color="primary white--text" @click="login">
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
import { mapActions } from "vuex";
import ValidationErrors from "./ValidationErrors.vue";

export default {
  components: { ValidationErrors },
  props: {
    loginDialog: Boolean,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errors: {},
      error: "",
    };
  },
  methods: {
    login() {
      this.errors = {};
      this.error = "";
      this.loginUser(this.user)
        .then(() => {
          this.closeLogin();
        })
        .catch((error) => {
          if (error.response.status == 422) {
            if (error.response.data.errors.length > 0) {
              this.errors = error.response.data.errors;
            } else if (error.response.data.error) {
              this.error = error.response.data.error;
            }
          }
        });
    },
    showRegisterModal() {
      this.$emit("show-register");
    },
    forgotPassword() {
      this.$emit("forgot-password");
    },
    closeLogin() {
      this.$emit("close-login");
    },
    ...mapActions({
      loginUser: "user/login",
    }),
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
