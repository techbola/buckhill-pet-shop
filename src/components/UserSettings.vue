<template>
  <v-dialog
    v-model="userSettingsDialog"
    max-width="900px"
    @click:outside="closeUserSettings"
  >
    <v-card class="pa-6">
      <span class="close-icon" @click="closeUserSettings"
        ><v-icon> mdi-close </v-icon></span
      >
      <v-card-title>
        <div class="mx-auto">User Settings</div>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row class="justify-space-between">
            <v-col cols="12" sm="3" class="profile-image">
              <v-img
                alt="profile"
                class="mx-auto"
                contain
                src="../assets/images/profile.png"
                transition="scale-transition"
                width="140"
              />
            </v-col>
            <v-col cols="12" sm="8">
              <v-row>
                <v-col>
                  <div>Name</div>
                  <div>{{ fullname }}</div>
                </v-col>
                <v-col
                  ><div>Phone number</div>
                  <div>{{ user.user.phone_number || "" }}</div></v-col
                >
                <v-col
                  ><div>
                    <div>Address</div>
                    {{ user.user.address || "" }}
                  </div></v-col
                >
              </v-row>
              <v-row>
                <v-col
                  ><div>Date joined</div>
                  <div>{{ user.user.created_at | formatDate }}</div></v-col
                >
                <v-col
                  ><div>Email</div>
                  <div>{{ user.user.email }}</div></v-col
                >
                <v-col
                  ><div>Marketting preferences</div>
                  <div>{{ user.user.is_marketing || "" }}</div></v-col
                >
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { UserData } from "../mixins/userData";

export default {
  mixins: [UserData],
  props: {
    userSettingsDialog: Boolean,
  },
  methods: {
    closeUserSettings() {
      this.$emit("close-user-settings");
    },
  },
  computed: {
    fullname() {
      return this.user.user
        ? this.user.user.first_name + " " + this.user.user.last_name
        : "";
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
.profile-image {
  border-right: 1px solid #dde3e2;
}
</style>
