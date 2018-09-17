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
        //preuzima rute kao listu i sortira je po visini na kojoj se nalaze avioni
        let tmpList = response.acList
        tmpList.sort((a, b) => b.Alt - a.Alt)
        //kasnije tu listu vraca preko promisa
        return Promise.resolve(tmpList)
      })
      .catch((err) => Promise.reject(err))
    },
    getPic({ commit }, name) {
      //preuzima ime kompanije i ako postoji u bazi vraca info za nju a samim tim i link za logo ako postoji
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