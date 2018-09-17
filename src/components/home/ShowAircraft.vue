<template>
  <v-layout @click="planeDetails">
    <v-flex xs10 offset-xs1>
      <v-card align-center justify-center row fill-height class="plane secondary">
        <font-awesome-icon icon="plane" :transform="{ rotate: direction }" class="sub-section"/>
        <div class="sub-section">{{ flight.Alt }}</div>
        <div class="sub-section">{{flight.Call}}</div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import * as VCard from 'vuetify/es5/components/VCard'

export default {
  name: 'ShowAircraft',
  props: ['flight'],
  data() {
    return {
      direction: 0
    }
  },
  components: {
    ...VCard
  },
  methods: {
    planeDetails() {
      sessionStorage.setItem('flight', JSON.stringify(this.flight))
      this.$router.push('aircraftInfo')
    }
  },
  mounted() {
    switch(this.flight.Alt % 2 === 0) {
      case true:
        this.direction = 315
        break
      case false:
        this.direction = 225
        break
    }
  }
}
</script>

<style lang="scss" scoped>
.plane {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  line-height: 50px;
  margin-bottom: 10px;
  cursor: pointer;
}

.sub-section {
  width: 100px;
  text-align: center;
}
</style>
