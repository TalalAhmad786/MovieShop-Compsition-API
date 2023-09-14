import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '../public/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faShoppingCart, } from '@fortawesome/free-solid-svg-icons'
import { faSignOut, } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faShoppingCart, faSignOut)

axios.defaults.baseURL ='http://localhost:3002'

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
