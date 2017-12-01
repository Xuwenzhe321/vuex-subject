/**
 * Created by Administrator on 2017-11-27.
 */

import * as type from './mutations_type'

export default {
  [type.INIT_DATA] (state) {
    state.itemNum = 0
    state.nowTime = 0
    state.answerId = []
  },
  [type.INTEVAL_TIME] (state) {
    state.allTime--
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
    state.timer = setInterval(() => {
      state.allTime === 0 ? clearInterval(state.timer) :  state.allTime--
    }, 1000)
  },
}
