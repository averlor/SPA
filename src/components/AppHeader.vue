<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-tile v-for="item in menuItems" :key="item.id" :to="item.route">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
            <v-toolbar app dark class="primary">
                <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
                <router-link to="/" tag="span" style="cursor:pointer">
                    <v-toolbar-title>Example App</v-toolbar-title>
                </router-link>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat v-for="item in menuItems" :key="item.id" :to="item.route">
                        <v-icon left v-html="item.icon"></v-icon>
                        {{ item.title }}
                    </v-btn>
                    <v-btn flat @click.prevent="signOut" v-if="isUserAutheticated">
                        <v-icon left>exit_to_app</v-icon>
                        Выйти
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
    </div>
</template>

<script>
export default {
    name: 'app-header',
    data() {
        return {
            drawer: false
        }
    },
    computed: {
        isUserAutheticated() {
        return this.$store.getters.isUserAuth
      },
      menuItems() {
          return this.isUserAutheticated ? 
          [
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
                }
          ] : 
          [
              {
                    id: 1,
                    icon: 'visibility',
                    title: 'Читать',
                    route: '/books'
                },
                {
                    id: 4,
                    icon: 'input',
                    title: 'Войти',
                    route: '/signin'
                },
                {
                    id: 5,
                    icon: 'lock_open',
                    title: 'Зарегистрироваться',
                    route: '/signup'
                }
          ]
      }
    },
    methods: {
        signOut() {
            this.$confirm('Джонни, прошу неуходи...Ты серьезно хочешь покинуть меня?').then(res => {
                if (res) {
                    this.$store.dispatch('SIGN_OUT')
                }
            })
        }
    }
   
}
</script>

