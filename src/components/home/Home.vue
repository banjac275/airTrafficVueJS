<template>
  <v-layout>
    <v-flex xs10 offset-xs1>
      <v-card class="mb-4">

        <v-card-title primary-title>
          <v-card-text v-if="obtained">
            <h3 class="headline text-xs-center">Airplanes in sky above you</h3>
          </v-card-text>
          <v-card-text v-else>
            <h3 class="headline text-xs-center">{{waitText}}</h3>
          </v-card-text>
        </v-card-title>

        <v-card-text class="content-info d-flex flex-row align-items-center" v-if="obtained">
          <h3>Bound</h3>
          <h3>Altitude</h3>
          <h3>Flight Code</h3>
        </v-card-text>
        <transition-group name="showin">
          <div v-for="item in flights" :key="item.Icao">
            <show-aircraft :flight="item"></show-aircraft>
          </div>
        </transition-group>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ShowAircraft from './ShowAircraft.vue'
import * as VCard from 'vuetify/es5/components/VCard'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      waitText: 'Please wait for data to be obtained',
      obtained: false,
      good: true,
      flights: []
    }
  },
  components: {
   ...VCard,
   'show-aircraft': ShowAircraft
  },
  methods: {
    ...mapActions([
      'retAllData'
    ]),
    startAll() {
      //provera da li je moguceno geolociranje
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let latitude = position.coords.latitude
          let longitude = position.coords.longitude

          //dobijena sirina i duzina se salju da se dobiju lokacije aviona
          this.retAllData({lat: latitude, lon: longitude})
          .then(data => {
            this.obtained = true
            this.flights = data

            //kada se vrate podaci sprema se izvrsenje osvezavanja za minut
            setTimeout(() => this.startAll(), 60000)
          })
          .catch(err => {
            console.log(err)
          })
        }, (error) => {
          console.log(error)
          //ispisivanje poruke ako nije omogucena geolokacija
          this.waitText = 'Please enable geolocation!'
        })
      } else {
        this.waitText = 'Please enable geolocation!'
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      //pokretanje instrukcije kad se upali strana
      this.startAll()
    })
  }  
}
</script>

<style lang="scss" scoped>
.content-info {
  text-align: center;
  justify-content: space-around;
  margin-left: 8%;
  width: 84%;
  h3 {
    max-width: 210px;
  }
}

.showin-enter {
  opacity: 0;
}

.showin-enter-active {
  transition: opacity .8s;
}

.showin-leave {
  opacity: 1;
}

.showin-leave-active {
  transition: opacity .8s;
  opacity: 0;
}
</style>
