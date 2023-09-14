<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="max-w-md p-6 bg-white shadow-lg rounded-lg">
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

        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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

<script>
import { mapActions } from "vuex";
export default {
  name: "AddMovie",
  data() {
    return {
      movie: {
        name: "",
        released_on: "",
      },
    };
  },
  methods: {
    ...mapActions({ CreateMov: "createMovie" }),
    addMovie() {
      // this.$store.commit('addMovie', { name: this.movieName, releaseDate: this.releaseDate });
      // this.movieName = '';
      // this.releaseDate = '';
      console.log(this.movie);
      this.CreateMov(this.movie);
    },
    showMovie() {
      this.$router.push("/list");
    },
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
