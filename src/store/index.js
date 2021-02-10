import Vue from 'vue'
import Vuex from 'vuex'
import category from "../assets/js/category"
import CryptoJS from 'crypto-js'

Vue.use(Vuex)

const curriculumList = {
  state: {
    curriculum: [],
    all: [
      {
        name: '全部课程',
        theCode: '00'
      }
    ],
    hot: [
      {
        name: '全部热门',
        theCode: '40'
      }
    ],
    math: [
      {
        name: '全部数学',
        theCode: '10'
      },
      {
        name: '高考数学',
        theCode: '11'
      },
      {
        name: '高等数学',
        theCode: '12'
      },
      {
        name: '线性代数',
        theCode: '13'
      },
      {
        name: '概率论',
        theCode: '14'
      },
    ],
    english: [
      {
        name: '全部英语',
        theCode: '20'
      },
      {
        name: '高考英语',
        theCode: '21'
      },
      {
        name: '考研英语',
        theCode: '22'
      },
      {
        name: '英语四级',
        theCode: '23'
      },
      {
        name: '英语六级',
        theCode: '24'
      },
    ],
    program: [
      {
        name: '全部编程',
        theCode: '30'
      },
      {
        name: 'Java',
        theCode: '31'
      },
      {
        name: 'C语言',
        theCode: '32'
      },
      {
        name: 'Python',
        theCode: '33'
      },
      {
        name: 'HTML前端',
        theCode: '34'
      },
    ]
  },
  mutations: {
    showCur(state,payload){
      switch (payload) {
        case '00':
          state.curriculum = state.all;
          break;
        case '10':
          state.curriculum = state.math;
          break;
        case '20':
          state.curriculum = state.english;
          break;
        case '30':
          state.curriculum = state.program;
          break;
        case '40':
          state.curriculum = state.hot;
          break;
      }


    },
    activeCur(state,payload){
      category.curAdd(payload);
    }
  },
}

export default new Vuex.Store({
  state: {
    toLogin:false,
    publicKey:null

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    curriculumList
  }
})
