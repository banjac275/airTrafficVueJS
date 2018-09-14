<template>
  <v-layout @click="planeDetails">
    <v-flex xs8 offset-xs2>
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
  props: ['flight', 'rot'],
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
    switch(this.rot) {
      case true:
        this.direction = 225
        break
      case false:
        this.direction = 315
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
