export default {
    state: {
        proccessing: false,
        error: null
    },
    mutations: {
        SET_PROCCESSING(state, payload) {
            state.proccessing = payload
        },
        SET_ERROR(state, payload) {
            state.error = payload
        },
        CLEAN_ERROR(state) {
            state.error = null
        }
    },
    getters: {
        getProccessing: state => {
            return state.proccessing
        },
        getError: state => {
            return state.error
        }
    }
}