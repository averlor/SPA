import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VuetifyConfirm from 'vuetify-confirm'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'

import 'vuetify/dist/vuetify.min.css' 
import { createDecipher } from 'crypto';

Vue.use(Vuetify)

Vue.use(VuetifyConfirm, {
  buttonTrueText: 'Да',
  buttonFalseText: 'Нет',
  color: 'warning',
  icon: 'warning',
  title: 'Warning',
  width: 350,
  property: '$confirm'
})

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch('STATE_CHANGE', user)
    });
  }
}).$mount('#app')
