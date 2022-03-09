<template>
  <v-dialog
    v-model="registerDialog"
    max-width="600px"
    @click:outside="closeRegister"
  >
    <v-card class="pa-6">
      <span class="close-icon" @click="closeRegister"
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
        <div class="text-h6 mt-2">Sign Up</div>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <validation-errors
                :errors="errors"
                v-if="errors"
              ></validation-errors>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                outlined
                placeholder="First Name *"
                required
                hide-details
                v-model="user.first_name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                outlined
                placeholder="Last Name *"
                required
                hide-details
                v-model="user.last_name"
              ></v-text-field>
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
              <v-text-field
                outlined
                placeholder="Confirm Password *"
                required
                hide-details
                type="password"
                v-model="user.password_confirmation"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn
                block
                depressed
                color="primary white--text"
                @click="register"
              >
                Sign Up
              </v-btn>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn
                plain
                color="blue darken-3"
                @click="showLoginModal"
                class="text-capitalize"
                >Already have an account? Log In</v-btn
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
    registerDialog: Boolean,
  },
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        address: "Address",
        phone_number: "12345678",
        avatar: "",
        is_marketing: "",
      },
      errors: {},
    };
  },
  methods: {
    register() {
      this.errors = {};
      this.registerUser(this.user)
        .then(() => {
          this.closeRegister();
        })
        .catch((error) => {
          if (error.response.status) {
            this.errors = error.response.data.errors;
          }
        });
    },
    showLoginModal() {
      this.$emit("show-login");
    },
    closeRegister() {
      this.$emit("close-register");
    },
    ...mapActions({
      registerUser: "user/register",
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
