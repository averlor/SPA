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
                <v-card color="info" class="white--text">
                    <v-container fluid>
                        <!-- Content for big screen start-->
                        <v-layout row class="hidden-sm-and-down">
                            <v-flex xs4 md3>
                                <v-card-media src= 'https://media.bloomsbury.com/rep/bj/9781408855652.jpeg'>
                                </v-card-media>
                            </v-flex>
                            <v-flex xs8 md9>
                                <v-card-title>
                                    <div>
                                        <div class="headline">
                                            {{ book.title }}
                                        </div>
                                        <div>{{ book.desciption }}</div>
                                        <v-divider class="white"></v-divider>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                                    <div class="ml-1">
                                        <span>{{ book.rating }}</span>
                                        <span>({{ book.ratingsCount }})</span>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-btn flat class="white">ПОДРОБНЕЕ...</v-btn>  
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                        <!-- Content for big screen end -->

                        <!-- Content for small screen start -->
                        <div class="hidden-md-and-up">
                            <v-layout row>
                                <v-flex xs4 md3>
                                    <v-card-media src= 'https://media.bloomsbury.com/rep/bj/9781408855652.jpeg'>
                                    </v-card-media>
                                </v-flex>
                                <v-flex xs8 md9>
                                    <v-card-title>
                                            <div class="">
                                                {{ book.title }}
                                            </div>
                                            <v-btn flat class="white">ПОДРОБНЕЕ...</v-btn>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-card-title>
                                        <div>{{ book.desciption }}</div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                                    <div class="ml-1">
                                        <span>{{ book.rating }}</span>
                                        <span>({{ book.ratingsCount }})</span>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </div>
                         <!--Content for small screen end  -->
                    </v-container>
                </v-card>
            </v-flex>
            <!-- Content end -->
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: null
        }
    },
    computed: {
        books() {
            return this.$store.getters.getBooks
        },
        filrteredBooks() {
            let books = this.books
            if (this.searchTerm) {
                books = books.filter(book => book.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0 || book.desciption.toLowerCase().indexOf(this.searchTerm.toLowerCase())) 
            }
            return books;
        }
    }
}
</script>

