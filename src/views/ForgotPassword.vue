<template>
  <v-container class="pt-10">
    <v-row>
      <v-col>
        <v-row justify="center" class="mt-2">
          <v-col sm="6">
            <h4>Recover Password</h4>
            <p>
              Enter the email associated with your account and we’ll send an
              email with instructions to reset your password.
            </p>
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
                <v-btn block depressed color="primary white--text">
                  Get Recovery Link
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
