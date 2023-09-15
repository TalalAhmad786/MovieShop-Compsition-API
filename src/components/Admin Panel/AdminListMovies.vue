<template>
  <div >
 
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="m-10 bgcolor max-w-7xl w-full p-8 rounded shadow">
        <h1 class="text-2xl font-semibold mb-4">Movie List</h1>
        <div class="text-center">
          Loading movies...
          <!-- {{ GetMovies }} -->
        </div>
        <div class="container mx-auto px-4">
       
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(movie, index) in GetMovies" :key="index"
              class="w-full rounded overflow-hidden shadow-lg bg-gray-200 hover:bg-red-350">
              <img class="w-full" src="https://image.offgamers.com/infolink/2023/05/netflix.jpg" alt="" />
              <div class="px-6 py-4">
                <h2 class="font-bold text-xl mb-2">
                  {{ movie.name }}
                </h2>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                  <strong>Released On:</strong> {{ movie.released_on }}
                </p>
                <p class="mb-4 font-normal text-gray-700 dark:text-gray-400 ">
                  <strong>Price:</strong> {{ movie.released_on }}
                </p>
                <p class="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  <strong>Tickets:</strong> {{ movie.tickets }}
                </p>
                <div class="flex justify center">
                <button class="flex m-4 bg-red bg-blue-900 text-neutral-100 rounded-full p-3 hover:bg-red-800"
                @click="toUpdate(index, movie.id)">
                    Update Movie
                  </button>
                  <button class="flex m-4 bg-red bg-red-900 text-neutral-100 rounded-full p-3 hover:bg-red-800"
                  @click="todelete(index, movie.id)">
                    Delete Movie
                  </button>
            
              </div>

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
           </div>
           </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();
const updatedMovie = ref( {
        name: "",
        released_on: "",
        price: "",
        tickets: ""
      });
let showUpdate = ref(false);
const id = ref(JSON.parse(localStorage.getItem("User")));
let idObj =ref(null);
  
const GetMovies= computed(()=> store.getters["movie/getMovies"]);

onMounted(()=>{
  store.dispatch("movie/fetchMovies");
})

const todelete = (index, id) =>{
      const delItem = { index: index, id: id };
      store.dispatch("movie/deleteMovies", delItem);
    };

const toUpdate=(index, id) =>{
      idObj.value = { index: index, id: id };
      updatedMovie.value.name = GetMovies.value[index].name;
      updatedMovie.value.released_on = GetMovies.value[index].released_on;
      updatedMovie.value.price= GetMovies.value[index].price;
      updatedMovie.value.tickets = GetMovies.value[index].tickets;

      showUpdate.value = true;
    };

    const closePopup = async() =>{

      store.dispatch("movie/updateMovies",{ idx: idObj.value, updatedMov: updatedMovie.value })
      showUpdate.value = false;

    }

</script>

<style>
/* You can add Tailwind CSS classes here if needed */
.bgcolor {
  background-color: #ada9a9;
}

.bgcd {
  background-color: #b0bbd4;
}
</style>
