<template>
  <v-layout>
    <v-flex xs8 offset-xs2>
      <v-card class="">
        <v-card-text>
          <h3 class="text-xs-center"></h3>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import * as VCard from 'vuetify/es5/components/VCard'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      flight: {},
      pic: ''
    }
  },
  methods: {
    ...mapActions([
      'getPic'
    ])
  },
  components: {
    ...VCard
  },
  mounted() {
    let recvData = JSON.parse(sessionStorage.getItem('flight'))
    console.log(recvData)
    if (recvData) {
      this.flight = recvData
      if (this.flight.Op !== undefined || this.flight.Op !== null) {
        this.getPic(this.flight.Op)
        .then(company => {
          console.log(company)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

