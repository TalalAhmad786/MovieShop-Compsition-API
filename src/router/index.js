import { createRouter, createWebHistory } from 'vue-router'
import ListMovies from '../components/User Panel/ListMovies.vue'
import User from '../components/User Panel/User.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import AddMovie from '../components/Admin Panel/AdminAddMovie.vue'
import ChangePassword from '../components/User Panel/ChangePassword.vue'
import Admin from '../components/Admin Panel/Admin.vue'
import AdminMovies from '../components/Admin Panel/AdminListMovies.vue'
import Cart from '../components/User Panel/Cart.vue'
import EditUser from '../components/User Panel/EditUser.vue'
import GetUser from '../components/Admin Panel/GetUser.vue'
import store from '@/store'
const routes = [
  
  {
    path: '/home',
    name: 'home', 
    component: User,
    children: [
      {
        path: '',
        name: 'ListMovies',
        component: ListMovies
      
      },
      {
        path: '/changepassword/:id',
        name: 'changepassword',
        component: ChangePassword
      
      },
      {
        path: '',
        name: 'ListMovies',
        component: ListMovies
      
      },
      {
        path:'/cart',
        name: 'Cart',
        component: Cart
      },
      {
        path:'/editprofile',
        name: 'EditProfile',
        component: EditUser
      }
    ],
    // meta: {
    //   adminAuth: false,
    //   requiresAuth: true,
    //   userAuth: true,  
    // }
  },
  {
    path: '/admin',
    name: 'admin', 
    component: Admin,
    children: [
      {
        path: '',
        name: 'movies',
        component: AdminMovies
      
      },
      {
        path: '/add',
        name: 'addMovies',
        component: AddMovie
      
      },
      {
        path: '/changerole',
        name: 'Change Role',
        component: GetUser
      
      },
  
    ],
    // meta: {
    //   adminAuth: true,
    //   requiresAuth: true,
    //   userAuth: false,  
    // }
  },{
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },



  // {
  //   path: '/add',
  //   name: 'Add',
  //   component: AddMovie,
    
    
  // },
  // {
  //   path: '/list',
  //   name: 'list',
  //   component: ListMovies,
  //   beforeEnter: (to, from, next) => {
  //     if(store.state.user.token){
  //       next();
  //     }else{
  //       next('/');
      
  //     }
  //   }
  // },
  // {
  //   path: '/chPass/:id',
  //   name: 'cp',
  //   component: ChangePassword,
  //   beforeEnter: (to, from, next) => {
  //     if(store.state.user.token){
  //       next();
  //     }else{
  //       next('/');
      
  //     }
  //   }
  // },
  // {
  //   path: '/getuser',
  //   component: GetUser
  // }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const authUser = store.getters['getUser']; 
  
//     console.log("Get user in Nv guard-->>>>>",authUser)
//     console.log("in the navigation guards------>",authUser.user.role);
//     //console.log("in the navigation guards------>",authUser.token);
//     if (!authUser.user || !authUser.token) {
//       console.log('Must login!')
//       next({ name: 'login' });
//     } else if (to.meta.adminAuth) {
//       console.log("Else if 1 st admin ");
//       if (authUser.user.role.toLowerCase() === 'admin') {
//         console.log("if 1 st admin ");
//         next('/admin');
//       } else {
//         console.log("else 1st  admin ");
//         next('/home');
//       }
//     } else if (to.meta.userAuth) {
//       console.log("Else if 1st user");
//       if (authUser.user.role.toLowerCase() === 'user') {
//         console.log(" if 1st user");
//         next();
//       } else {
//         console.log("I am in admin");
//         next('/admin');
//       }
//     }
//   } else {

//     console.log(" last else");
//     next();
//   }
// });

export default router
