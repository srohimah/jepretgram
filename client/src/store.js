import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    photos: []
  },
  getters: {
    getPhotos (state) {
      return state.photos
    }
  },
  mutations: {
    showPhotos (state, payload) {
      state.photos = payload
    },
    upload (state, payload) {
      state.photos.push(payload)
    }
  },
  actions: {
    showPhotos ({commit}, payload) {
      axios.get('http://localhost:3000/photos/').then(response => {
        commit('showPhotos', response.data)
      })
    },
    upload ({commit}, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/photos/',
        data: {
          caption: payload.caption,
          photo: payload.photo
        },
        headers: {
          token: localStorage.tokenUser
        }
      }).then(question => {
        commit('upload', question)
      }).catch(err => console.log(err))
    }
  }
})
