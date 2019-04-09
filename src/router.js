import Vue from 'vue'
import Router from 'vue-router'

import Articles from '@/components/Articles.vue'
import Words from '@/components/Words.vue'
import Profile from '@/components/Profile.vue'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
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
