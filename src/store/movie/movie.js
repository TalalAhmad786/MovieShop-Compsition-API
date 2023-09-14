import axios from 'axios';  
import user from '../user/user.js';

export default{
    namespaced:true,
state: {
    movie: {
        movies: [],
        cart: [], 
  
      },
},
getters: { 
    getMovies(state) {
    return state.movie.movies;
  },
  },
mutations: { 
    SET_MOVIES(state, payload) {
    state.movie.movies = payload;
  },
 },
actions:{
    async createMovie(_, payload) {
        try {
          const token = user.state.user.token;
          console.log(payload)
          console.log("TOKEN IN THE STORE STATE--->", user.state.user.token);
          console.log(token)
          const config = {
            headers: {
              'x-access-token': token,
              'Content-Type': 'application/json'
            }
          }
          const { data } = await axios.post('http://localhost:3002/movies', payload, config);
          console.log('Movie created:', data);
        } catch (error) {
  
        }
      },
      async fetchMovies({ commit }) {
        try {
          console.log("User Id in storep-->>",this.state.user.userId);
          const token = user.state.user.token;
           console.log(token)
          const config = {
            headers: {
              'x-access-token': token,
              'Content-Type': 'application/json'
            }
          }
          const { data } = await axios.get('http://localhost:3002/movies', config);
          localStorage.setItem("Movies",JSON.stringify( data.data))
          console.log("Fetch data ---->>>", data)
          commit('SET_MOVIES', data.data.movies)
  
  
        } catch (error) {
  
        }
      },
      async updateMovies({ commit }, { idx, updatedMov }) {

        try {
          const token = user.state.user.token;
          console.log('token---->in update', token)
          const config = {
            headers: {
              'x-access-token': token,
              'Content-Type': 'application/json'
            }
          }
  
          const { data } = await axios.put(`http://localhost:3002/movies/${idx.id}`, updatedMov, config)
          console.log("Data in update--->>>> ", data.data.movies)
          commit('SET_MOVIES', data.data.movies)
          localStorage.setItem("Movies",JSON.stringify( data.data))
        } catch (error) {
  
        }
  
      },
      async deleteMovies({ commit }, payload) {
        try {
          const token = user.state.user.token;
          console.log('token---->in update', token)
          const config = {
            headers: {
              'x-access-token': token,
              'Content-Type': 'application/json'
            }
          }
  
          const { data } = await axios.delete(`http://localhost:3002/movies/${payload.id}`, config)
          console.log("Delete data ---->>>", data)
          commit('SET_MOVIES', data.data.movies)
        } catch (error) {
  
        }
  
      },
  
}



}    