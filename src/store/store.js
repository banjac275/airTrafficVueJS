import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api/index'
import flightData from './modules/flightData'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions: {
    retAllData({ commit }, data) {
      return api.getRoutes(data.lat, data.lon)
      .then((response) => {
        let tmpList = response.acList
        tmpList.sort((a, b) => b.Alt - a.Alt)
        return Promise.resolve(tmpList)
      })
      .catch((err) => Promise.reject(err))
    },
    getPic({ commit }, name) {
      return api.getCompany(name)
      .then(res => Promise.resolve(res))
      .catch(err => Promise.reject(err))
    }
  },
  modules: {
    namespaced: true,
    flightData
  }
})