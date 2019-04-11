<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <!-- Search start -->
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-container fluid>
                    <v-layout row>
                        <v-flex>
                            <v-text-field label="Search" v-model="searchTerm"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <!-- Search end -->

            <!-- Content start -->
            <v-flex v-for="book in filrteredBooks" :key="book.id" xs12 sm10 md8 offset-sm1 offset-md2>
                <Book :book="book"/>
            </v-flex>
            <!-- Content end -->
        </v-layout>
    </v-container>
</template>

<script>

import Book from './BooksListItems'

export default {
    components:{
        Book
    },
    data() {
        return {
            searchTerm: null
        }
    },
    computed: {
        books() {
            return this.$store.getters.GET_BOOKS
        },
        filrteredBooks() {
            let books = this.books
            if (this.searchTerm) {
                books = books.filter(book => book.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0) 
            }
            return books;
        }
    }
}
</script>

