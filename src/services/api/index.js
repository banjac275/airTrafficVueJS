import axios from 'axios'
import config from '@/config'

export default {
  getRoutes (lat, long) {
    return fetch(config.find_url + '&lat=' + lat + '&lng=' + long).then(response => response.json())
  },
  getRoutesWest (lat, long) {
    return fetch(config.find_url + '&lat=' + lat + '&lng=' + long + '&fWBnd=true').then(response => response.json())
  },
  getRoutesEast (lat, long) {
    return fetch(config.find_url + '&lat=' + lat + '&lng=' + long + '&fEBnd=true').then(response => response.json())
  },
  getCompany (name) {
    return axios({ method: 'get', url: config.company_url + 'name=' + name, headers: {'accept': 'application/json', 'Authorization': 'Bearer ' + config.token}})
  }
}