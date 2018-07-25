const MapStore = {
  namespaced: true,
  state: {
    maps: [],
    map: {}
  },
  mutations: {
    one(state, data) {
      state.map = data.map;
      return state;
    },
    many(state, data) {
      state.maps = data.maps;
      return state;
    }
  },
  actions: {
    index(context, query) {
      $.ajax({
        url: `maps`,
        type: 'get',
        data: query,
        success: function(data) {
          context.commit('many', data)
        }
      })
    },
    show(context, id) {
      $.ajax({
        url: `maps/${id}`,
        type: 'get',
        success: function(data) {
          context.commit('one', data)
        }
      })
    },
    New(context, id) {
      $.ajax({
        url: `maps`,
        type: 'post',
        success: function(data) {
          context.commit('one', data)
        }
      })
    },
  }
};

export default MapStore;
