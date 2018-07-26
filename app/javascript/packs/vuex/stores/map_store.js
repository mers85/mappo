const MapStore = {
  namespaced: true,
  state: {
    maps: [],
    map: {},
    progress: ''
  },
  mutations: {
    one(state, data) {
      state.map = data.map;
      return state;
    },

    many(state, data) {
      state.maps = data.maps;
      return state;
    },

    progress(state, step) {
      state.progress = step;
      return state.progress;
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
    new(context, id) {
      $.ajax({
        url: `maps/new`,
        type: 'get',
        success: function(data) {
          context.commit('one', data)
        }
      })
    },
    create(context, form) {
      context.commit('progress', 'loading')
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `maps`,
          type: 'post',
          data: {
            map: form
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
    update(context, map) {
      context.commit('progress', 'loading')
      $.ajax({
        url: `maps/${map.id}`,
        type: 'put',
        data: {
          map: map
        },
        success: function(data) {
          context.commit('progress', 'success')
          context.commit('one', data);
        },
        error: function(data) {
          context.commit('progress', 'failed')
          context.commit('errors', data);
        }
      })
    },
    destroy(context, map_id) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `maps/${map_id}`,
          type: 'delete',
          success: function(data) {
            resolve(data);
          },
          error: function(data) {
            reject(data);
          }
        });
      });
    }
  }
};

export default MapStore;
