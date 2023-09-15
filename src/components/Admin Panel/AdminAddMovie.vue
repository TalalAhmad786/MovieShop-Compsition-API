<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class=" bgcolor max-w-md p-6 shadow-lg rounded-lg">
      <h1 class="text-2xl font-semibold mb-4">Movie List</h1>

      <form @submit.prevent="addMovie">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Movie Name</label
          >
          <input
            v-model="movie.name"
            type="text"
            class="mt-1 p-2 w-full border rounded"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Release Date</label
          >
          <input
            v-model="movie.released_on"
            type="text"
            class="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Tickets : </label
          >
          <input
            v-model="movie.tickets"
            type="number"
            min="10"
            class="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div class="mb-5">
          <label class="block text-sm font-medium text-gray-700"
            >Price : </label
          >
          <input
            v-model="movie.price"
            type="number"
            min="50"
            class="mt-1 p-2 w-full border rounded"
          />
        </div>

        <button
          type="submit"
          class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Movie
        </button>
      </form>

      <button
        type="submit"
        @click="showMovie"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Movies List
      </button>
    </div>
  </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const movie = ref({
  name: "",
  released_on: "",
  price: "",
  tickets: "",
});

const addMovie= async()=> {

    await store.dispatch("movie/createMovie",movie.value);
      movie.value.name = "";
      movie.value.released_on = "";
      movie.value.tickets = "",
      movie.value.price = ""

    }
const showMovie=()  =>{
     router.push("/admin");
    }


</script>

<style>
/* Add any custom styles here */
.bgcolor {
  background-color: #ada9a9;
}
</style>
