<template>
  <div class="bgcolor p-6">
    <!--
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
-->
    <div>
      <div>
        <h1>Movie List</h1>
        <div class="text-center">
          Loading movies...
          <!-- {{ GetMovies }} -->
        </div>
        <div class="container mx-auto px-4 ">
       
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
                <div class="flex justify-center">
                  <button class="flex ml-4 bg-red bg-blue-900 text-neutral-100 rounded-full p-3 hover:bg-red-800"
                    @click="addcart(movie.id)">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div v-if="showpopup" class="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900">
              <div class="bg-white p-12 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">Ticket Selection</h2>
                <div class="mb-4">
                  <label class="block mb-1 font-medium">Select No .Of tickets you want to buy</label>
                  <input v-model="ticketcounter" class="w-full px-4 py-2 border rounded-md" />
                </div>
                <div class="flex justify-end">
                  <button class="flex bg-red bg-red-600 text-neutral-100 rounded-full p-3 hover:bg-red-800"
                    @click="savechanges">
                    Save Changes
                  </button>
                  <button class="flex ml-4 bg-red bg-red-600 text-neutral-100 rounded-full p-3 hover:bg-red-800"
                    @click="closePopup">
                    Close
                  </button>
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

import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';


let showpopup = ref(false);
let ticketcounter = ref(null);
let selectedMovie = ref(null);
const isMobile = ref(false);
const store = useStore();

const GetMovies= computed(()=> store.getters["movie/getMovies"]);

onMounted(()=>{
  store.dispatch("movie/fetchMovies");
})


const addcart = (movieID) =>{
  selectedMovie =JSON.parse(localStorage.getItem('Movies')).movies.find(movie => movie.id === movieID);
  console.log("SDFSJASL",selectedMovie);
  showpopup.value= ref(true);
  //console.log(showpopup.value);
}

const savechanges= ()=>{
  //console.log(ticketcounter.value);
  selectedMovie.ticketcounter = ticketcounter.value;
  if (ticketcounter.value > selectedMovie.tickets) {
        alert(`Sorry! Only ${selectedMovie.tickets} tickets available for this show`);
      } else {

        selectedMovie.newprice = selectedMovie.price * ticketcounter.value;
        let cart = JSON.parse(localStorage.getItem("CartMovie")) || [];
        cart.push(selectedMovie);
        localStorage.setItem("CartMovie", JSON.stringify(cart));
       
        showpopup.value = false;
        alert("Item added to cart");
      }
    
}

const closePopup = ()=>{
      showpopup.value = false

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
@media (max-width: 640px) {
.custmed{
  background-color: black;
  width: 18rem;
  gap: 8rem;
}
}
</style>
