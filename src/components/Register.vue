<template>
  <v-dialog
    v-model="registerDialog"
    max-width="600px"
    @click:outside="closeRegister"
  >
    <v-card class="pa-6">
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
            <v-col cols="12" md="6">
              <v-text-field
                outlined
                placeholder="First Name *"
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                outlined
                placeholder="Last Name *"
                required
                hide-details
              ></v-text-field>
            </v-col>
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
              <v-text-field
                outlined
                placeholder="Confirm Password *"
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn
                block
                depressed
                color="primary white--text"
                @click="registerDialog = false"
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
export default {
  props: {
    registerDialog: Boolean,
  },
  methods: {
    showLoginModal() {
      this.$emit("show-login");
    },
    closeRegister() {
      this.$emit("close-register");
    },
  },
};
</script>
