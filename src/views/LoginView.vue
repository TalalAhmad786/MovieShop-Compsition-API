<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white shadow-md p-8 rounded-md w-96">
            <h1 class="text-2xl font-semibold mb-4">Login</h1>
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Email" v-model="userDetails.email" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Password" v-model="userDetails.password" />
                </div>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button" @click="loginUser">
                    Log In
                </button>
            </form>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" @click="toregister">
                Register
            </button>
        </div>
    </div>
</template>


<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const userDetails= ref({
    email: '',
    password: ''
});

const router = useRouter();
const store = useStore();

const loginUser = async() =>{

    if(userDetails.value.email!=0 && userDetails.value.password!=0){
        const success = await store.dispatch("user/loginUser", userDetails.value);

        if(success){
            console.log("Login Successful!");
            router.push('home');
        }else{
            alert("Incorrect Email or passowrd");

        }


    }else{
        alert("Please enter both email and password");
    }


}

const toregister = ()=>{
    router.push("/signup")
}

//import store from '@/store'
// import { mapActions } from 'vuex'

// export default {
//     name: 'LoginView',

//     data() {

//         return {
//             userDetails: {
//                 email: '',
//                 password: ''
//             },
//             id: JSON.parse(localStorage.getItem("User")),
//         }
//     },

//     methods: {

//         ...mapActions({ Login: 'user/loginUser' }),

//         toregister() {
//             this.$router.push('/signup')
//         },
//         async loginUser() {
//             // this.Login(this.userDetails)
//             //this.$router.push('/home')

//             if (this.userDetails.email != 0 && this.userDetails.password != 0) {
//                 try {
//                     const success = await this.Login(this.userDetails); 
//                     if (success) {
//                         console.log("Login successful")
//                         console.log(this.id.user._id);
                        
//                        // store.state.user.userId= this.id.user._id;
//                         this.$router.push('/admin'); 
//                     } else {
//                         console.log('Incorrect email or password.');
                       
//                     }
//                 } catch (error) {
//                     console.error(error);
//                 }
//             } else {
//                 console.log('Please enter both email and password.');
//             }

//         }
//     }

// }

</script>