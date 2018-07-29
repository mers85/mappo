const LocationStore = {
  namespaced: true,
  state: {
    locations: [],
    location: {},
    progress: ''
  },
  mutations: {
    one(state, data) {
      state.location = data.location;
      return state;
    },

    many(state, data) {
      state.locations = data.locations;
      return state;
    },

    progress(state, step) {
      state.progress = step;
      return state.progress;
    },
    update_position(state, marker) {
      state.location = {"lat": marker.lat,"long": marker.lng, "address": marker.address};
      return state.location;
    }

  },
  actions: {
    create(context, form) {
      context.commit('progress', 'loading')
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `maps/${form[0]}/locations`,
          type: 'post',
          data: {
            location: form[1]
          },
          success: function(data) {
            context.commit('progress', 'success')
            resolve(data);
          },
          error: function(data) {
            context.commit('progress', 'failed')
            context.commit('errors', data)
          }
        })
      })
    },
    updateLocationPosition(context, marker) {
      context.commit('update_position', marker)
    },
  }
};

export default LocationStore;
