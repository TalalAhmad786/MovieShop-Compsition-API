import { createStore } from 'vuex'
import axios from 'axios';
import user from './user/user.js';
import movie from './movie/movie.js';

export default createStore({
  modules: {
    user,
    movie,
  },
})
