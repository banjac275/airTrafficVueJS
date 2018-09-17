<template>
  <v-layout>
    <v-flex xs8 offset-xs2>
      <v-card class="">
        <v-card-text>
          <h2 class="text-xs-center">Flight Info</h2>
          <hr>
          <h3 class="text-xs-center">Airplane manufacturer: {{flight.Man}}</h3>
          <h3 class="text-xs-center">Airplane model: {{flight.Mdl}}</h3>
          <h3 class="text-xs-center">Origin: {{flight.From}}</h3>
          <h3 class="text-xs-center">Destination: {{flight.To}}</h3>
          <h3 class="text-xs-center">Logo:</h3>
          <v-img class="mx-auto pic" :src="pic"></v-img>
          <v-btn class="mx-auto btn secondary" @click="getBack">Return back</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import * as VCard from 'vuetify/es5/components/VCard'
import * as VImg from 'vuetify/es5/components/VImg'
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
    ]),
    getBack() {
      this.$router.push('/')
    }
  },
  components: {
    ...VCard,
    ...VImg
  },
  mounted() {
    //preuzima podatke iz session storage-a i trazi firmu da bi mogao da nadje logo ako uopste postoji
    let recvData = JSON.parse(sessionStorage.getItem('flight'))
    if (recvData) {
      this.flight = recvData
      if (this.flight.Op !== undefined || this.flight.Op !== null) {
        this.getPic(this.flight.Op)
        .then(company => {
          //ako postoji firma i logo, dodeljuje se kao source za sliku inace tu ulogu uzima placeholder slika
          (company.data.logo !== null) ? this.pic = company.data.logo : this.pic = '@/assets/logo-placeholder-png.png'
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        this.pic = '@/assets/logo-placeholder-png.png'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pic {
  height: 300px;
  width: 300px;
}

.btn {
  width: 300px;
  line-height: 40px;
  margin-top: 20px;
  left: calc(50% - 150px);
}
</style>

