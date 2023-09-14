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
        <input
          class="bg-gray-100 p-2 rounded w-full text-center"
          v-model="email"
        />
      </div>

     

      <button
        @click="updateUserEvent(indx)"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
      >
        Update
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions } from "vuex";
//import store from "@/store";

export default {
  name: "EditUser",
 
  data() {
    return {
      name: this.$store.state.user.user.user.user.name,
      email: this.$store.state.user.user.user.user.email,
    };
  },
  computed:{
    ...mapGetters({GetUser: "user/getUser"})
  },
  methods: {
    ...mapActions({User : "user/editUser"}),

    async updateUserEvent() {
      //console.log("In the update password --->", this.userId);
      const obj = {
        id: this.GetUser.user._id,
        name: this.name,
        email: this.email,
      };
      console.log("Obj in edit user---->", obj)
      await this.User(obj);
       this.$router.push("/");
    },
  },
};
</script>