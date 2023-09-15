<template>
  <div>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="m-10 bgcolor max-w-7xl w-full p-8 rounded shadow">
        <h1 class="text-2xl font-semibold mb-4">Movie List</h1>
        <div class="text-center">
          Loading Users...
          <!-- {{ GetMovies }} -->
        </div>
        <div>
          <ul>
            <li
              v-for="(user, index) in getUsers"
              :key="index"
              class="mb-4 max-w-7xl w-full bg-gray-200 p-8 rounded shadow"
            >
              <h2 class="text-lg font-medium">{{ user.name }}</h2>
              <p class="text-gray-600">{{ user.role }}</p>

              <input
                type="radio"
                v-model="user.role"
                value="user"
                @change="changeRole(user.id, 'user')"
              />
              User

              <input
                type="radio"
                v-model="user.role"
                value="admin"
                @change="changeRole(user.id, 'admin')"
              />
              Admin
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  
import {  computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const getUsers= computed(()=> store.getters["user/getUsers"]);

onMounted(()=>{
  store.dispatch("user/getAllusers");
})
const changeRole = async(id,role)=>{
  const obj = { id: id, role: role };
  await store.dispatch("user/updaterole",obj);
}

// import store from "@/store";
// import { mapActions, mapGetters } from "vuex";
// export default {
//   name: "GetUser",

//   data() {
//     return {
//       id: store.state.user.userId,
//       idObj: null,
//     };
//   },

//   computed: {
//     ...mapGetters(["getUsers"]),
//   },
//   methods: {
//     ...mapActions(["getAllusers"]),
//     ...mapActions(["updaterole"]),
//     changeRole(id, role) {
//       const obj = { id: id, role: role };
//       this.updaterole(obj);
//     },
//   },
//   created() {
//     this.getAllusers();
//   },
// };
</script>


<style>
.bgcolor {
  background-color: #ada9a9;
}
</style>