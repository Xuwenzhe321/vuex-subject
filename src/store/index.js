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
  allTime: 8,
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
    {
      problemId: 2,
      problemTitle: '自由女神像是哪个国家送给美国的礼物？',
      answers: [
        {
          answerId: 'a5',
          fid: 2,
          text: '美国',
          isTrue: true
        },
        {
          answerId: 'a6',
          fid: 2,
          text: '英国',
          isTrue: false
        },
        {
          answerId: 'a7',
          fid: 2,
          text: '德国',
          isTrue: false
        },
        {
          answerId: 'a8',
          fid: 2,
          text: '俄罗斯',
          isTrue: false
        }
      ]
    },
    {
      problemId: 3,
      problemTitle: '你猜猜猜我的性别？',
      answers: [
        {
          answerId: 'a5',
          fid: 3,
          text: '男',
          isTrue: false
        },
        {
          answerId: 'a6',
          fid: 3,
          text: '女',
          isTrue: false
        },
        {
          answerId: 'a7',
          fid: 3,
          text: '男女',
          isTrue: true
        },
        {
          answerId: 'a8',
          fid: 3,
          text: '不男不女',
          isTrue: false
        }
      ]
    },
    {
      problemId: 4,
      problemTitle: '你猜猜猜我的性别？',
      answers: [
        {
          answerId: 'a9',
          fid: 4,
          text: '男',
          isTrue: false
        },
        {
          answerId: 'a10',
          fid: 4,
          text: '女',
          isTrue: false
        },
        {
          answerId: 'a11',
          fid: 4,
          text: '男女',
          isTrue: true
        },
        {
          answerId: 'a12',
          fid: 4,
          text: '不男不女',
          isTrue: false
        }
      ]
    },
    {
      problemId: 5,
      problemTitle: '你猜猜猜我的性别？',
      answers: [
        {
          answerId: 'a13',
          fid: 5,
          text: '男',
          isTrue: false
        },
        {
          answerId: 'a14',
          fid: 5,
          text: '女',
          isTrue: false
        },
        {
          answerId: 'a15',
          fid: 5,
          text: '男女',
          isTrue: true
        },
        {
          answerId: 'a16',
          fid: 5,
          text: '不男不女',
          isTrue: false
        }
      ]
    }
  ],
  answerId: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
