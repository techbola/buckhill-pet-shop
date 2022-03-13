import { mapState, mapActions } from "vuex";

export const UserData = {
  created() {
    this.getUserDetails();
  },
  methods: {
    ...mapActions({
      getUserDetails: "user/getUser",
    }),
  },
  computed: {
    ...mapState({ user: "user" }),
  },
};
