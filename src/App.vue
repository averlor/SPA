<template>
    <v-app>
      <AppHeader></AppHeader>  
      <v-content>
        <router-view />
      </v-content>
      <AppFooter></AppFooter>
    </v-app>
</template>

<script>

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: '',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

