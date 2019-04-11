import Vue from 'vue'
import Router from 'vue-router'

import Books from './views/Books.vue'
import Book from './views/Book.vue'
import Words from './views/Words.vue'
import Profile from './views/Profile.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import HomePage from './views/HomePage.vue'
import Store from './store'


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
      component: Books
    },
    {
      path: '/books/book/:id',
      name: 'book',
      props: true,
      component: Book
    },
    {
      path: '/words',
      name: 'words',
      component: Words,
      beforeEnter: AuthGuard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: AuthGuard
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


function AuthGuard(from, to, next) {
  if (Store.getters.isUserAuth) {
    next()
  } else {
    next('/signin')
  }
}