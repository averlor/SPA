export default {
    state: {
        proccessing: false,
        error: null,
        menuItems: [
            
            {
                id: 1,
                icon: 'visibility',
                title: 'Читать',
                route: '/books'
            },
            {
                id: 2,
                icon: 'extension',
                title: 'Учить слова',
                route: '/words'
            },
            {
                id: 3,
                icon: 'account_circle',
                title: 'Мой кабинет',
                route: '/profile'
            },
            {
                id: 4,
                icon: 'exit_to_app',
                title: 'Выйти',
                route: '/logout'
            },
            {
                id: 5,
                icon: 'input',
                title: 'Войти',
                route: '/signin'
            },
            {
                id: 6,
                icon: 'lock_open',
                title: 'Зарегистрироваться',
                route: '/signup'
            }
         ]
    },
    mutations: {
        SET_PROCCESSING(state, payload) {
            state.proccessing = payload
        },
        SET_ERROR(state, payload) {
            state.error = payload
        },
        CLEAR_ERROR(state) {
            state.error = null
        }
    },
    getters: {
        getMenu: state => state.menuItems,
        getMenuUserSignIn: state => {
            state.menuItems.map(item => item.id < 4)
        },
        getMenuUserSignOut: state => {
            state.menuItems.map(item => item.id > 5)
        },
        getProccessing: state => {
            return state.proccessing
        },
        getError: state => {
            return state.error
        }
    }
}