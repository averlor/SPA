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
        },
        UNSET_USER(state) {
            state.user = {
                isAuth: false,
                uid: null
            }
        }
    },
    actions: {
        SIGN_UP({ commit }, payload) {
            commit('SET_PROCCESSING', true)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then( () => {
                commit('SET_PROCCESSING', false)
                
            })
            .catch(function(error) {
                commit('SET_PROCCESSING', false)
                commit('SET_ERROR', error.message)
              });
        },
        SIGN_IN({commit}, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then( () => {
                commit('SET_PROCCESSING', false)
                commit('CLEAR_ERROR')
                
            })
            .catch(function(error) {
                commit('SET_PROCCESSING', false)
                commit('SET_ERROR', error.message)
              });
        },
        SIGN_OUT() {
            firebase.auth().signOut()
        },
        STATE_CHANGE({commit}, payload) {
            if (payload) {
                commit('SET_USER', payload.uid)
            } else {
                commit('UNSET_USER')
            }
        }
    }
}