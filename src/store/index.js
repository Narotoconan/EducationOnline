import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations"
import actions from "./actions"

import curriculumList from './modules/curriculumList'
import searchPage from './modules/searchPage'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    toLogin:false,
  },
  mutations,
  actions,
  modules: {
    curriculumList,
    searchPage
  }
})
