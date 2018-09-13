import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api/index'
import flightData from './modules/flightData'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions: {
    retAllData({ commit }, data) {
      let temp = {}
      return api.getRoutesWest(data.lat, data.lon)
      .then(resp => {
        temp.west = resp
        return api.getRoutesEast(data.lat, data.lon)
      })
      .then((response) => {
        temp.east = response
        return Promise.resolve(temp)
      })
      .catch((err) => Promise.reject(err))
    }
  },
  modules: {
    namespaced: true,
    flightData
  }
})