<template>
    <div>
        <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Регистрация</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-alert
                  :value="error"
                  type="warning"
                >
                  {{ error }}
                </v-alert>
                <v-form v-model="valid">
                  <v-text-field prepend-icon="person" name="login" label="Login" type="email" required v-model="email" :rules="emailRules"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" required v-model="password" :rules="passwordRules"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="signUp" :disabled="proccessing || !valid">Зарегистрироваться</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            email: null,
            password: null,
            valid: false,
            emailRules: [
              (v) => !!v || 'Input email, please',
              (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Uncorrectly email'
            ],
            passwordRules: [
              (v) => !!v || 'Input password, please',
              (v) => (v && v.length >= 6) || 'Password - short. Minimum 6 symbols'
            ]
        }
    },
    computed:{
      error() {
        return this.$store.getters.getError
      } ,
      proccessing() {
        return this.$store.getters.getProccessing
      },
      isUserAutheticated() {
        return this.$store.getters.isUserAuth
      }                                                           
    },
    watch:{
      isUserAutheticated(val) {
        if (val === true) {
          this.$router.push("/")
        }
      }
    },
    methods: {
      signUp() {
        this.$store.dispatch('SIGN_UP', {email: this.email, password: this.password})
      }
    }
}
</script>

<style scoped>

</style>

