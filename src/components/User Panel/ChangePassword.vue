<template>
  <div >

    <div
      class="flex items-center justify-center mt-8"
      @submit.prevent="ChangePassword"
    >
      <form class="bg-white p-8 shadow-md rounded-md">
        <h2 class="text-2xl mb-4">Change Password</h2>

        <div class="mb-4 " >
          <label for="password" class="block text-gray-700 font-semibold"
            >New Password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "@/store";
import NavBar from "./NavBar.vue";

export default {
  name: "ChangePassword",
  components: {
    NavBar,
  },
  data() {
    return {
      // name: store.state.user.user.name,
      getUser: JSON.parse(localStorage.getItem("User")),
      password: null,
    };
  },
  methods: {
    ...mapActions({ pass: "user/changePassword" }),

    ChangePassword() {
      //console.log(this.getUser.user._id);
      const obj = { id: this.getUser.user._id, password: this.password };
      console.log("obj as payload>>>>>>", obj);
      this.pass(obj);
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
body{
  overflow: hidden;

}
html {
  background-color: #ada9a9; /* Set your desired background color here */
}


</style>