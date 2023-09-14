<template>
  <div>
    <nav class="bg-zinc-600 border-gray-200 py- dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" class="flex items-center">
          <img src="https://www.svgrepo.com/show/499962/music.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-black">MOVIESHOP</span>
        </a>
        <div class="flex items-center lg:order-2">
          <div class="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <router-link to="/cart"
            class="text-white focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-60 focus:outline-none flex flex-col items-center">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" beat size="2xl" style="color: #000000;" />
            <span class="text-xs mt-1 text-black font-bold">Cart</span>
          </router-link>
          <router-link to="/editprofile"
            class="text-white focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-60 focus:outline-none flex flex-col items-center">
            <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" rotation=270 size="2xl"
              style="color: #000000;" />
            <span class="text-xs mt-1 text-black font-bold">Logout</span>
          </router-link>

          <button @click="toggleMobileMenu" type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-black rounded-lg lg:hidden hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-black dark:text-red-400 dark:hover:bg-white-700 dark:focus:ring-red-600"
            :aria-expanded="isMobileMenuOpen">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          :class="{ 'hidden': !isMobileMenuOpen }" :id="mobileMenuId">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <router-link to="/home">
                <p
                  class="block py-2 pl-3 pr-4 text-black bg-red-700 rounded lg:bg-transparent lg:text-red-900 lg:p-0 text-black">
                  Home </p>
              </router-link>
            </li>
            <li>
              <a class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-900 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                @click="changepass()" aria-current="page"><strong>Change Password</strong></a>
            </li>
            <li>
              <router-link to="/editprofile">
                <p
                  class="block py-2 pl-3 pr-4 text-black bg-red-700 rounded lg:bg-transparent lg:text-red-900 lg:p-0 text-black">
                  Account Settings</p>
              </router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>
  
<script>
import store from '@/store';
export default {
  name: 'Navbar',

  data() {
    return {
      id: JSON.parse(localStorage.getItem("User")),
      isMobileMenuOpen: false,
      mobileMenuId: 'mobile-menu-2'
    }
  },
  methods: {
    changepass() {
      this.$router.push({ path: `/changepassword/${this.id.user._id}` })
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  }

};
</script>
  
<style scoped>
/* Add any additional styling you want */

.bg-gray-900 {
  background-color: #16162F
}</style>
  