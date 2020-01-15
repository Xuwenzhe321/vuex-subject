/**
 * Created by Administrator on 2017-11-27.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  score: 20,
  allTime: 20,
  itemNum: 0,
  timer: null,
  problems: [
    {
      problemId: 1,
      problemTitle: '题目一什么国',
      answers: [
        {
          answerId: 'a1',
          fid: 1,
          text: '美国',
          isTrue: true
        },
        {
          answerId: 'a2',
          fid: 1,
          text: '韩国',
          isTrue: false
        },
        {
          answerId: 'a3',
          fid: 1,
          text: '齐国',
          isTrue: false
        },
        {
          answerId: 'a4',
          fid: 1,
          text: '大国',
          isTrue: false
        }
      ]
    },

  ],
  isDone: false
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
