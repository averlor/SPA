<template>
    <div>
        <v-container grid-list-md>
            <v-layout row wrap>
                <!-- hello-message start -->
                <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex>
                                <div>
                                    <h2>Hey, Hello!</h2>
                                    <h3>
                                        Are you to us? Come on soon, but it was already waiting!
                                    </h3>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
                <!-- Hello-message end -->

                <!-- Content start -->
                <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                    <HelloCard/>
                </v-flex>
                <!-- Content end -->
            </v-layout>
    </v-container>
    </div>
</template>


<script>

import HelloCard from '@/components/MainPage.vue'

export default {
    name: 'home',
    components: {
        HelloCard
    }
}
</script>
