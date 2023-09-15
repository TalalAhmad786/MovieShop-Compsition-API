<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white shadow-md p-8 rounded-md w-96">
        <h1 class="text-2xl font-semibold mb-4">Register</h1>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              v-model="userData.name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              v-model="userData.email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              v-model="userData.password"
            />
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="toRegister">
            Register
          </button>
        </form>
      </div>
    </div>
  </template>

<script setup>

//import store from '@/store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const userData ={
  name:"",
  email: "",
  password: ""
}

const router = useRouter();
const store  = useStore();

const toRegister = async()=>{
  await store.dispatch("user/registerUser");
  router.push("/");

}


// export default{
//     name: 'SignupView',
//     data(){
//         return{
//         userData: {

//             name: '',
//             email: '',
//             password: ''
        

//         }
//     }
//     },
//     methods: {
//         ...mapActions({Register: 'registerUser'}),

//         toRegister(){
//             this.Register(this.userData);
//         }

//     }
// }
</script>