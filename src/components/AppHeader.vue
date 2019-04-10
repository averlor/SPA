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
                </v-toolbar-items>
            </v-toolbar>
    </div>
</template>

<script>
export default {
    name: 'app-header',
    data() {
        return {
            drawer: false,
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
                title: 'Зарегстрироваться',
                route: '/signup'
            }
         ]
        }
    }
   
}
</script>

