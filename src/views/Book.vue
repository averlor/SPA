<template>
    <v-container grid-list-md v-if="book">
        <v-layout row wrap>
            <v-flex xs12 xs10 offset-sm1>
                <BookDetails :book="book"></BookDetails>
            </v-flex>
            <v-flex v-for="part in book.parts" :key="part.id" xs12 xs10 offset-sm1>
                <BookPartListItem :part="part" :bookId="book.id"></BookPartListItem>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>

import BookDetails from '@/components/BookDetails.vue'
import BookPartListItem from '@/components/BookPartListItem.vue'

export default {
    components: {
        BookDetails,
        BookPartListItem
    },
    props: {
        id: {
            type: String,
            required: true                  
        }
    },
    computed: {
        book() {
            return this.$store.getters.GET_BOOKS.find(book => book.id == this.id)
        }
    }
}
</script>

