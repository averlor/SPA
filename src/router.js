import Vue from 'vue'
import Router from 'vue-router'

import Articles from './views/Articles.vue'
import Words from './views/Words.vue'
import Profile from './views/Profile.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import HomePage from './views/HomePage.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/books',
      name: 'books',
      component: Articles
    },
    {
      path: '/words',
      name: 'words',
      component: Words
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }

  ]
})
