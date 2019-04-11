<template>
    <v-card color="info" class="white--text">
        <v-container fluid>
            <!-- Content for big screen start-->
            <v-layout row class="hidden-sm-and-down">
                <v-flex xs4 md3>
                    <v-img src= 'https://www.drawingnow.com/file/videos/steps/119657/how-to-draw-an-open-book-step-7.jpg' class="icon__head">
                    </v-img>
                </v-flex>
                <v-flex xs4 md6>
                    <v-card-title>
                        <div>
                            <div class="headline">
                                OR
                            </div>
                        </div>
                    </v-card-title>
                </v-flex>
                <v-flex xs4 md3>
                    <v-img src= 'https://ichef.bbci.co.uk/news/912/cpsprodpb/179AE/production/_103568669_gettyimages-579236076.jpg' class="icon__head">
                    </v-img>
                </v-flex>
            </v-layout>
            <!-- Content for big screen end -->

            <!-- Content for small screen start -->
            <div class="hidden-md-and-up">
                <v-layout row>
                    <v-flex xs4 md3>
                        <v-img src= 'https://www.drawingnow.com/file/videos/steps/119657/how-to-draw-an-open-book-step-7.jpg' class="icon__head"></v-img>
                    </v-flex>
                    <v-flex xs4 md6>
                        <v-card-title>
                            <div>
                                <div class="headline">
                                    OR
                                </div>
                            </div>
                        </v-card-title>
                    </v-flex>
                    <v-flex xs4 md3>
                        <v-img src= 'https://ichef.bbci.co.uk/news/912/cpsprodpb/179AE/production/_103568669_gettyimages-579236076.jpg' class="icon__head">
                        </v-img>
                    </v-flex>
                </v-layout>
            </div>
            <!--Content for small screen end  -->
        </v-container>
    </v-card>
</template>

<script>
export default {
    name: 'MainPage',
    data() {
        return {
            tabMode: 'read'
        }
    }
}
</script>


<style scoped>
.icon__head{
    border-radius: 50%;
    margin: 0 auto;
    width: 200px;
    height: 160px;
}
</style>

