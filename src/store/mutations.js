/**
 * Created by Administrator on 2017-11-27.
 */

import * as type from './mutations_type'

export default {
  [type.INIT_DATA] (state) {
    state.itemNum = 0
    state.allTime = 20
    state.answerId = []
    state.isDone = false
  },
  [type.ADD_ITEM] (state, num) {
    state.itemNum === state.problems.length-1 ? state.itemNum = state.problems.length-1 : state.itemNum += num
    console.log(state.itemNum)
  },
  [type.REMEBER_ITEM] (state, param) {
    let problems = state.problems;
    for(let i=0;i <problems.length;i ++){
      if(problems[i].problemId === param.fid){
        for(let j=0; j<problems[i].answers.length;j ++){
          if(problems[i].answers[j].answerId === param.answerId){
            if(problems[i].answers[j].isTrue){
              state.answerId.push(param)
            }
          }
        }
      }
    }
  },
  [type.INTEVAL_TIME] (state) {
    console.log('inteval',state.timer)
    state.timer = setInterval(() => {
      state.allTime === 0 ? clearInterval(state.timer) :  state.allTime--
    }, 1000)
  },
  [type.CLEAR_TIME] (state) {
    state.timer = null
  },
  [type.GET_RESULT] (state, param) {
    state.userInfo.score = param
  },
  [type.IS_DONE] (state,bool) {
    state.isDone = bool
  }
}
