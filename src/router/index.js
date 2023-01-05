import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';
import List from '../components/todos/List.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    {
      path: "/",
      name: "Signin",
      component: Signin,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: '/todos',
      name: 'List',
      component: List
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;

// import Vue from 'vue';
// import Router from 'vue-router';
// import LoginForm from '../components/LoginForm.vue';

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Signin',
//       component: LoginForm
//     }
//   ]
// })
