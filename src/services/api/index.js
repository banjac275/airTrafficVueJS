import axios from 'axios'
import config from '@/config'

export default {
  getRoutes (lat, long) {
    return fetch(config.find_url + '&lat=' + lat + '&lng=' + long).then(response => response.json())
  },
  //get routes west and east ne radi lepo pa je morao da se odradi mali hak, te se zato koristi samo get routes
  getRoutesWest (lat, long) {
    return fetch(config.find_url + '&lat=' + lat + '&lng=' + long + '&search=fWBnd:1').then(response => response.json())
  },
  getRoutesEast (lat, long) {
    return fetch(config.find_url + '&lat=' + lat + '&lng=' + long + '&search=fEBnd:1').then(response => response.json())
  },
  //za pribavljanje info-a o kompaniji
  getCompany (name) {
    return axios({ method: 'get', url: config.company_url + 'name=' + name, headers: {'accept': 'application/json', 'Authorization': 'Bearer ' + config.token}})
  }
}