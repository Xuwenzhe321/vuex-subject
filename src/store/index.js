/**
 * Created by Administrator on 2017-11-27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

const state = {
  score: 10,
  allTime: 20,
  itemNum: 0,
  theScoreHeget:0,
  timer: null,
  problems: [
    {
      problemId: 1,
      problemTitle: '谢子腾是一个资质较为平庸的学生，平时的学习成绩也平平，而他的哥哥十分突出，多次夺得校三好学生的荣誉称号，每次考试也名列前茅，父母引以为傲，多次在外人和兄弟俩面前夸耀哥哥，却只字不提弟弟谢子腾。而某一天，谢子腾拿着全班第一的成绩回到了家，并不断强调自己的努力。您作为家长认为孩子此刻的想法是？',
      answers: [
        {
          answerId: 'a1',
          fid: 1,
          text: '谢子腾得到一次好成绩希望和你们好好炫耀一下',
          isTrue: true ,
          answerScore: 3
        },
        {
          answerId: 'a2',
          fid: 1,
          text: '谢子腾希望你们也能在外人面前夸奖他一次',
          //isTrue: 2
          answerScore: 5
        },
        {
          answerId: 'a3',
          fid: 1,
          text: '谢子腾希望借考试有进步去实现一些物质的心愿',
          //isTrue: 3
          answerScore: 2
        },
        {
          answerId: 'a4',
          fid: 1,
          text: '谢子腾希望证明他努力程度有得一拼',
          //isTrue: 4
          answerScore: 4
        },
        {
            answerId: 'a5',
            fid: 1,
            text: '大谢子腾想要你能他并且嘲讽一下他哥哥',
            //isTrue: 4
            answerScore: 1
          }
      ],
    },
    {
        problemId: 2,
        problemTitle: '谢子腾今年刚刚小学毕业，已经有了一定的自理能力，而谢子腾的父母由于工作事务繁忙，没有多少时间陪伴孩子，因此特地给孩子买了手机为他解解闷，同时也作为对他的补偿。可是最近，谢子腾的父母发现谢子腾越来越不爱和他们说话，总是带着个耳机，有时候把自己关在房间不让人进来，里面却传来谢子腾和人聊天的声音...若你是谢子腾的家长，您认为这是什么原因导致的？',
        answers: [
          {
            answerId: 'a1',
            fid: 1,
            text: '手机游戏或趣味视频魅力太大，谢子腾上瘾',
            isTrue: true ,
            answerScore: 2
          },
          {
            answerId: 'a2',
            fid: 1,
            text: '谢子腾有了手机以后对音乐产生了很大兴趣',
            //isTrue: 2
            answerScore: 1
          },
          {
            answerId: 'a3',
            fid: 1,
            text: '谢子腾缺乏沟通，从而渐渐依赖上了手机',
            //isTrue: 3
            answerScore: 5
          },
          {
            answerId: 'a4',
            fid: 1,
            text: '谢子腾晚上想要和朋友通话聊天以此以慰藉',
            //isTrue: 4
            answerScore: 4
          },
          {
            answerId: 'a5',
            fid: 1,
            text: '谢子腾必须晚上与同学合作完成过多的作业',
            //isTrue: 4
            answerScore: 3
          }
        ],
      },
      {
        problemId: 3,
        problemTitle: '临近新年，家家户户又到了大扫除的时间，谢子腾的家庭也不例外。而经过半天的细致打扫，谢子腾的父母清理出了三个很旧的玩具，刚准备丢掉他们，这时，刚上一年级的谢子腾看到了，大声嚷嚷着不能扔了这些他最喜欢的玩具。若你是谢子腾的家长，您此时会选择怎么做？',
        answers: [
          {
            answerId: 'a1',
            fid: 1,
            text: '直接扔掉，不管谢子腾的反对，他迟早要学会接受',
            isTrue: true ,
            answerScore: 1
          },
          {
            answerId: 'a2',
            fid: 1,
            text: '看到孩子的哭闹心软，放回原处并安慰他',
            //isTrue: 2
            answerScore: 2
          },
          {
            answerId: 'a3',
            fid: 1,
            text: '悉心说服他这些旧玩具实在不能要了，之后还会买',
            //isTrue: 3
            answerScore: 3
          },
          {
            answerId: 'a4',
            fid: 1,
            text: '表面把玩具里放回，等谢子腾走再偷偷扔',
            //isTrue: 4
            answerScore: 4
          },
          {
            answerId: 'a5',
            fid: 1,
            text: '放回原处，但当谢子腾再不乖时，以扔玩具作胁迫',
            //isTrue: 4
            answerScore: 4
          }
        ],
      },
      {
        problemId: 4,
        problemTitle: '.新的一年，万物更新，谢子腾的父母很想在新的一年将家里翻新。此时的谢子腾已经上了初一，对什么事情都有了些了解，也产生了参与决定家中事宜的愿望。但是在购物的那天，谢子腾的父母并没有带上谢子腾。若你是谢子腾的父母，你认为谢子腾会怎么想？',
        answers: [
          {
            answerId: 'a1',
            fid: 1,
            text: '开心至极，因为家里没人刚好可以和朋友开黑',
            isTrue: true ,
            answerScore: 1
          },
          {
            answerId: 'a2',
            fid: 1,
            text: '寂寞难耐，又是孤单一人独处家中',
            //isTrue: 2
            answerScore: 4
          },
          {
            answerId: 'a3',
            fid: 1,
            text: '认为无所谓，因为作业或其他烦事让他没有欲望',
            //isTrue: 3
            answerScore: 2
          },
          {
            answerId: 'a4',
            fid: 1,
            text: '感到失望，因为他认为你觉得他不能参与商讨家事',
            //isTrue: 4
            answerScore: 5
          },
          {
            answerId: 'a5',
            fid: 1,
            text: '悲愤交加，因为觉得你不在新一年中给他买东西',
            //isTrue: 4
            answerScore: 3
          }
        ],
      },
      {
        problemId: 5,
        problemTitle: '谢子腾的爸爸是个公司的职员，凭借着他努力工作和加班，终于爬到了总经理的位置。一天吃晚饭的时候，谢子腾和爸爸说：“爸爸，今天老师教我们下五子棋了！过一会吃完饭，爸爸陪我下吧！”爸爸说：“好啊，我们子腾这么小就会下五子棋了呢，吃完饭让爸爸瞧瞧。”饭后，父子两摆上棋盘，准备下棋。这时候子腾爸爸的手机突然响了，两三句交流之后，就对子腾说：”爸爸有个紧急的会议，要立刻去公司，你看这个电脑上也有五子棋，会有电脑陪你下的。“说完就走了。之后，谢子腾并没有打开电脑，而是走到窗前，看着爸爸的车开远。请问以下那种情况最有可能',
        answers: [
          {
            answerId: 'a1',
            fid: 1,
            text: '谢子腾心中十分失落，因为没有得到爸爸的陪伴',
            isTrue: true ,
            answerScore: 1
          },
          {
            answerId: 'a2',
            fid: 1,
            text: '谢子腾感到遗憾，因为没有在五子棋上击败爸爸',
            //isTrue: 2
            answerScore: 2
          },
          {
            answerId: 'a3',
            fid: 1,
            text: '谢子腾认为爸爸工作繁忙，自己不应该打扰他',
            //isTrue: 3
            answerScore: 3
          },
          {
            answerId: 'a4',
            fid: 1,
            text: '谢子腾心中狂喜，见到爸爸走远后，自己肆意玩耍',
            //isTrue: 4
            answerScore: 4
          },
          {
            answerId: 'a5',
            fid: 1,
            text: '谢子腾因为爸爸违背诺言，感到十分失望',
            //isTrue: 4
            answerScore: 4
          }
        ],
    },
        {
            problemId: 6,
            problemTitle: '在过去的三个月中，您给孩子买零食的频率最接近以下哪种',
            answers: [
              {
                answerId: 'a1',
                fid: 1,
                text: '每天都买',
                isTrue: true ,
                answerScore: 1
              },
              {
                answerId: 'a2',
                fid: 1,
                text: '一周一次',
                //isTrue: 2
                answerScore: 5
              },
              {
                answerId: 'a3',
                fid: 1,
                text: '半月一次',
                //isTrue: 3
                answerScore: 4
              },
              {
                answerId: 'a4',
                fid: 1,
                text: '一月一次',
                //isTrue: 4
                answerScore: 3
              },
              {
                answerId: 'a5',
                fid: 1,
                text: '从不购买',
                //isTrue: 4
                answerScore: 2
              }
            ]
      },
      {
        problemId: 7,
        problemTitle: '在过去的三个月中，您给孩子买玩具的频率最接近以下哪种',
        answers: [
          {
            answerId: 'a1',
            fid: 1,
            text: '每天都买',
            isTrue: true ,
            answerScore: 1
          },
          {
            answerId: 'a2',
            fid: 1,
            text: '一周一次',
            //isTrue: 2
            answerScore: 3
          },
          {
            answerId: 'a3',
            fid: 1,
            text: '半月一次',
            //isTrue: 3
            answerScore: 5
          },
          {
            answerId: 'a4',
            fid: 1,
            text: '一月一次',
            //isTrue: 4
            answerScore: 4
          },
          {
            answerId: 'a5',
            fid: 1,
            text: '从不购买',
            //isTrue: 4
            answerScore: 2
          }
        ],
    },
    {
        problemId: 8,
        problemTitle: '在过去的三个月中，您给孩子买衣服的频率最接近以下哪种',
        answers: [
          {
            answerId: 'a1',
            fid: 1,
            text: '每天都买',
            isTrue: true ,
            answerScore: 2
          },
          {
            answerId: 'a2',
            fid: 1,
            text: '一周一次',
            //isTrue: 2
            answerScore: 3
          },
          {
            answerId: 'a3',
            fid: 1,
            text: '半月一次',
            //isTrue: 3
            answerScore: 4
          },
          {
            answerId: 'a4',
            fid: 1,
            text: '一月一次',
            //isTrue: 4
            answerScore: 5
          },
          {
            answerId: 'a5',
            fid: 1,
            text: '从不购买',
            //isTrue: 4
            answerScore: 1
          }
        ],
},
{
    problemId: 9,
    problemTitle: '在过去的三个月中，您给孩子课外书的频率最接近以下哪种',
    answers: [
      {
        answerId: 'a1',
        fid: 1,
        text: '每天都买',
        isTrue: true ,
        answerScore: 4
      },
      {
        answerId: 'a2',
        fid: 1,
        text: '一周一次',
        //isTrue: 2
        answerScore: 5
      },
      {
        answerId: 'a3',
        fid: 1,
        text: '半月一次',
        //isTrue: 3
        answerScore: 3
      },
      {
        answerId: 'a4',
        fid: 1,
        text: '一月一次',
        //isTrue: 4
        answerScore: 2
      },
      {
        answerId: 'a5',
        fid: 1,
        text: '从不购买',
        //isTrue: 4
        answerScore: 1
      }
    ],
},

{
    problemId: 10,
    problemTitle: '在过去的三个月中，您给孩子学习用品的频率最接近以下哪种',
    answers: [
      {
        answerId: 'a1',
        fid: 1,
        text: '每天都买',
        isTrue: true ,
        answerScore: 2
      },
      {
        answerId: 'a2',
        fid: 1,
        text: '一周一次',
        //isTrue: 2
        answerScore: 4
      },
      {
        answerId: 'a3',
        fid: 1,
        text: '半月一次',
        //isTrue: 3
        answerScore: 5
      },
      {
        answerId: 'a4',
        fid: 1,
        text: '一月一次',
        //isTrue: 4
        answerScore: 3
      },
      {
        answerId: 'a5',
        fid: 1,
        text: '从不购买',
        //isTrue: 4
        answerScore: 1
      }
    ],
},



  ],
  isDone: false
}

export default new Vuex.Store({
  state,
  getters:{ //添加getters
    reportScore: (state) => {
      let score = state.map( product => {
        return {
          name: product.theScoreHeget,
        }
      })
      return score;
    },
  },
  actions,
  mutations,
})
