<template>
    <nav class="bg-gray-900 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-white font-semibold text-lg">
              Your Logo
            </router-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link
                to="/admin"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                All movies
              </router-link>
              <router-link
                to="/add"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Add Movies
            </router-link>
            <router-link
                to="/changerole"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users List
            </router-link>

              <!-- <router-link
                to="/add"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
              Movies Add
              </router-link> -->
              <!-- <router-link
                to="/services"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
               Account Settings
              </router-link> -->
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import store from '@/store';
  export default {
    name: 'Nav',

    data(){
      return{
     
    }
    },
    methods: {
      
    }

  };
  </script>
  
  <style scoped>
  /* Add any additional styling you want */

.bg-gray-900 {
  background-color: #16162F
}
  </style>
  