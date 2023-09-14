import axios from 'axios';

export default{
namespaced:true,

state:{
    user: {
    users: [],
    user: null,
    token: null,
    userId: null,


  },
  userinfo: {

  }

},

getters:{
    getUsers(state) {
        return state.user.users;
  
      },
    getUser(state) {
        return state.user.user;
      
    }
},
mutations:{
    SET_TOKEN(state, payload) {
        state.user.token = payload
      },
    SET_USER(state, payload) {
        state.user.user = payload;
     },
     SET_USERS(state, payload) {
        state.user.users = payload
      },

},
actions: {
    async registerUser(_, payload) {
        console.log(payload)
        try {
          const { data } = await axios.post("http://localhost:3002/users/register", payload)
  
  
  
        } catch (e) {
  
        }
      },
      async loginUser({ commit }, payload) {
        try {
  
          const { data } = await axios.post("http://localhost:3002/users/authenticate", payload)
          const token = data.data.token
  
          console.log("User id in store in login action --->", this.state.user.userId)
          commit('SET_USER', data.data)
          commit('SET_TOKEN', token)
          console.log(data)
          return true 
        } catch (error) {
          return false;
        }
      },
      async editUser(_, payload) {
        try {
          console.log('payload in acton ChngePAss : ', payload)
          const { data } = await axios.put(`http://localhost:3002/users/${payload.id}/updateuser`, payload);
          console.log('Data in updatePAssword', data)
        } catch (error) {
  
        }
      },
      async getAllusers({ commit }) {
        try {
          const { data } = await axios.get(`http://localhost:3002/users`);//(`http://localhost:3002/users/${payload.id}/updateuser`, payload); 
          console.log("Users in data ----->>>>>", data);
          commit('SET_USERS', data.data.users);
  
        } catch (error) {
  
        }
      },
      async updaterole({ commit }, payload) {
        try {
          console.log('payload in acton ChngePAss : ', payload)
          const { data } = await axios.put(`http://localhost:3002/users/${payload.id}/updaterole`, payload);
          console.log('Data in updatePAssword', data)
          commit('SET_USERS', data.data.users);
        } catch (error) {
  
        }
      },
      async changePassword(_, payload) {
        try {
          console.log('payload in acton ChngePAss : ', payload)
          const { data } = await axios.put(`http://localhost:3002/users/${payload.id}/updatepassword`, payload);
          console.log('Data in updatePAssword', data)
        } catch (error) {
  
        }
      },
},




}