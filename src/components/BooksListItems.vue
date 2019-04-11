<template>
    <v-card color="info" class="white--text">
        <v-container fluid>
            <!-- Content for big screen start-->
            <v-layout row class="hidden-sm-and-down">
                <v-flex xs4 md3>
                    <v-img :src= 'book.imageUrl'>
                    </v-img>
                </v-flex>
                <v-flex xs8 md9>
                    <v-card-title>
                        <div>
                            <div class="headline">
                                {{ book.title }}
                            </div>
                            <div>{{ book.description }}</div>
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
                        <v-btn flat class="white" :to="{name: 'book', params:{id: book.id}}">ПОДРОБНЕЕ...</v-btn>  
                    </v-card-actions>
                </v-flex>
            </v-layout>
            <!-- Content for big screen end -->

            <!-- Content for small screen start -->
            <div class="hidden-md-and-up">
                <v-layout row>
                    <v-flex xs4 md3>
                        <v-img :src= 'book.imageUrl'>
                        </v-img>
                    </v-flex>
                    <v-flex xs8 md9>
                        <v-card-title>
                                <h4>
                                    {{ book.title }}
                                </h4>
                                <v-btn flat class="white" :to="{name: 'book', params:{id: book.id}}">ПОДРОБНЕЕ...</v-btn>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-title>
                            <div>{{ book.description }}</div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                            <div class="ml-1">
                                <span>{{ book.rating }}</span>
                                <span>({{ book.ratingsCount }})</span>
                            </div>
                    </v-card-actions>
                    </v-flex>
                </v-layout>
            </div>
            <!--Content for small screen end  -->
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    }
}
</script>

