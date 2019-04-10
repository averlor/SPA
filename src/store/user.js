import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuth: false,
            uid: null
        }
    },
    getters:{
        isUserAuth: state => state.user.isAuth
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuth = true
            state.user.uid = payload
        }
    },
    actions: {
        SIGNUP({ commit }, payload) {
            commit('SET_PROCCESSING', true)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('SET_USER', user.uid)
                commit('SET_PROCCESSING', false)
                
            })
            .catch(function(error) {
                commit('SET_PROCCESSING', false)
                commit('SET_ERROR', error.message)
              });
        },
        SIGNIN({commit}, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('SET_USER', user.uid)
                commit('SET_PROCCESSING', false)
                
            })
            .catch(function(error) {
                commit('SET_PROCCESSING', false)
                commit('SET_ERROR', error.message)
              });
        }
    }
}