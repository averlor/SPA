import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'

import 'vuetify/dist/vuetify.min.css' 

Vue.use(Vuetify)

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
