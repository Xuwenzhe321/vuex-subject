/**
 * Created by Administrator on 2017-11-27.
 */

import * as type from './mutations_type'
import store from '.'

export default {
  //数据初始化
  [type.INIT_DATA] (state) {
    state.itemNum = 0
    state.allTime = 20
    state.answerId = []
    state.theScoreHeget=0
    state.isDone = false
  },
  //下一步 itemNum变化+1
  [type.ADD_ITEM] (state, num) {
    state.itemNum === state.problems.length-1 ? state.itemNum = state.problems.length-1 : state.itemNum += num
    //console.log(state.itemNum)
  },
  //存储回答后的题目，然后对比答案是否准确
  [type.REMEBER_ITEM] (state, param) {
    let problems = state.problems;
    for(let i=0;i <problems.length;i ++){
      if(problems[i].problemId === param.fid){

        for(let j=0; j<problems[i].answers.length;j ++){

          if(problems[i].answers[j].answerId === param.answerId){
            console.log(problems[i].answers[j].answerScore)
            let a= problems[i].answers[j].answerScore
            state.theScoreHeget=a + state.theScoreHeget

            if(problems[i].answers[j].isTrue){
            //state.theScoreHeget+= param.answerscore
            //console.log(this.$root.theScoreHeget)
            state.answerId.push(param)
            
            }
          }
        }
      }
    }
  },
  //定时器
  [type.INTEVAL_TIME] (state) {
    console.log('inteval',state.timer)
    state.timer = setInterval(() => {
      state.allTime === 0 ? clearInterval(state.timer) :  state.allTime--
    }, 1000)
  },
  //清楚定时器
  [type.CLEAR_TIME] (state) {
    state.timer = null
  },
  //统计总分
  [type.GET_RESULT] (state, param) {
    state.userInfo.score = param
  },
  //记录做题是否完成
  [type.IS_DONE] (state,bool) {
    state.isDone = bool
  },

  [type.REPORT_SCORE] (state) {
    return state.theScoreHeget
  }
}
