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

<script setup>



import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();


const name=  ref(store.state.user.user.user.user.name);
const email= ref(store.state.user.user.user.user.email);

const GetUser= computed(()=> store.getters["user/getUser"]);

const updateUserEvent= async()=>{
  const obj = {
        id: GetUser.value.user._id,
        name: name.value,
        email: email.value,
      };
      await store.dispatch("user/editUser",obj);
      router.push("/");

    }
</script>