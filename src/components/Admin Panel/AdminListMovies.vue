<template>
  <div>
 
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-7xl w-full bg-white p-8 rounded shadow">
        <h1 class="text-2xl font-semibold mb-4">Movie List</h1>
        <div class="text-center">
          Loading movies...
          <!-- {{ GetMovies }} -->
        </div>
        <div>
          <ul>
            <li
              v-for="(movie, index) in GetMovies"
              :key="index"
              class="mb-4 max-w-7xl w-full bg-white p-8 rounded shadow"
            >
              <h2 class="text-lg font-medium">{{ movie.name }}</h2>
              <p class="text-gray-600">{{ movie.released_on }}</p>
              <p class="text-gray-600">{{ movie.price }}</p>
              <p class="text-gray-600">{{ movie.tickets }}</p>
<!-- 
              <p>{{ movie.id }}</p>
              <p>{{ index }}</p>
               -->
              <button type="button" @click="toUpdate(index, movie.id)">
                Update Movie</button
              ><br />
              <button type="button" @click="todelete(index, movie.id)">
                DElete
              </button>
              <button type="button" @click="changepass()">CPPPP</button>

              <div
                v-if="showUpdate"
                class="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900"
              >
                <div class="bg-white p-6 rounded-lg shadow-md">
                  <h2 class="text-xl font-semibold mb-4">Popup</h2>
                  <div class="mb-4">
                    <label class="block mb-1 font-medium">Title</label>
                    <input
                      v-model="updatedMovie.name"
                      class="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block mb-1 font-medium">Description</label>
                    <input
                      v-model="updatedMovie.released_on"
                      class="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block mb-1 font-medium">Price</label>
                    <input
                      v-model="updatedMovie.price"
                      class="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block mb-1 font-medium">Ticket</label>
                    <input
                      v-model="updatedMovie.tickets"
                      class="w-full px-4 py-2 border rounded-md"
                    />
                  </div>

                  <div class="flex justify-end">
                    <button
                      class="flex bg-red bg-red-600 text-neutral-100 rounded-full p-3 hover:bg-red-800"
                      @click="closePopup"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import store from "@/store";
//import NavBar from "./NavBar.vue";
export default {
  name: "AdminMovies",


  computed: {
    ...mapGetters({ GetMovies: "getMovies" }),
  },

  mounted() {
    this.FetchMovies();
    //console.log("kwjekwje");
  },

  data() {
    return {
      showUpdate: false,
      updatedMovie: {
        name: "",
        released_on: "",
        price: "",
        tickets: ""
      },
      id: JSON.parse(localStorage.getItem("User")),
      idObj: null,
      //loading: true,
    };
  },
  methods: {
    ...mapActions({ FetchMovies: "fetchMovies" }),
    ...mapActions(["updateMovies"]),
    ...mapActions(["deleteMovies"]),

    changepass() {
      console.log("Id in change component", this.id);
      this.$router.push({ path: `/chPass/${this.id.user._id}` });
    },

    todelete(index, id) {
      const delItem = { index: index, id: id };
      this.deleteMovies(delItem);
    },

    toUpdate(index, id) {
      this.idObj = { index: index, id: id };
      this.updatedMovie.name = this.GetMovies[index].name;
      this.updatedMovie.released_on = this.GetMovies[index].released_on;
      this.updatedMovie.price= this.GetMovies[index].price;
      this.updatedMovie.tickets = this.GetMovies[index].tickets;

      this.showUpdate = true;
      // console.log("Route params id " , this.$route.params.id)
      //     this.$router.push({ path: `/list/${index}` });
    },
    closePopup() {
      console.log(this.updatedMovie);
      this.updateMovies({ idx: this.idObj, updatedMov: this.updatedMovie });
      this.showUpdate = false;
    },
  },
  // async mounted() {
  //   try {
  //     const response = await fetch('https://api.example.com/movies'); // Replace with your API endpoint
  //     const data = await response.json();
  //     this.movies = data;
  //     this.loading = false;
  //   } catch (error) {
  //     console.error('Error fetching movies:', error);
  //   }
  // },
};
</script>

<style>
/* You can add Tailwind CSS classes here if needed */
</style>
