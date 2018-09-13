const state = {
  flightData: {}
}

const getters = {
  getFlightData: state => {
    return state.flightData
  }
}

const mutations = {
  changeFlightData: (state, { flightData }) => {
    state.flightData = flightData
  }
}

export default {
  state,
  getters,
  mutations
}