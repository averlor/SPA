<template>
    <v-card color="accent" class="white--text">
        <v-card-title primary-title class="headline">
            {{ part.title }}
        </v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat class="white" :to="part.link">Открыть</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        part: {
            type: Object,
            required: true
        },
        bookId: {
            type: String,
            required: true

        }
    }
}
</script>
