<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-4">Account Settings</h1>

      <div class="mb-4">
        <label class="block font-semibold mb-2">Name:</label>
        <input
          class="bg-gray-100 p-2 rounded w-full text-center"
          v-model="name"
        />
      </div>

      <div class="mb-4">
        <label class="block font-semibold mb-2">Email:</label>
        <p class="bg-gray-100 p-2 rounded">{{ email }}</p>
      </div>

      <button
        @click="updateUserEvent(indx)"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
      >
        Edit
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import store from "@/store";

export default {
  name: "EditUser",
  data() {
    return {
      name: store.state.user.user.name,
      email: store.state.user.user.email,
    };
  },
  methods: {
    ...mapActions(["editUser"]),

    showuserinfo() {
      //console.log("In the update password --->", this.userId);
      // const obj = { 'id': store.state.user.userId, 'name': this.name, 'email': this.email }
      //  await this.updateUser(obj);

      this.$router.push("/");
    },
  },
};
</script>