<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app class="info" dark>
      <span class="ml-1">&copy; 2018, Nikola Stevanović</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>
