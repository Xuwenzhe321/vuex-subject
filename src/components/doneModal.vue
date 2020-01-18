<template>
  <div id="doneModal">
    <div class="top-score">
      <div class="tips">快看看成绩吧</div>
      <div class="score">
<!--<span class="score-num" v-text="answerId.length*score"></span>-->
<span class="score-num" v-text="theScoreHeget"></span>
        <span class="tag">分</span>
      </div>
      <div class="result">
        <div class="item all">
          <span class="num" v-text="problems.length"></span>
          <span class="tag">答题</span>
        </div>
        <div class="item all">
          <span class="num" v-text="answerId.length"></span>
          <span class="tag">答对</span>
        </div>
        <div class="item all">
          <span class="num" v-text="problems.length-answerId.length"></span>
          <span class="tag">答题</span>
        </div>
      </div>
    </div>
    <div class="desc" v-html="tipsType"></div>
    <div class="btns">
      <div class="row flex">
        <button class="red-bg" @click="showTips">查看解决方案</button><button class="yellow-bg" @click="againPlay">再来一次</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        totalScore: 0
      }
    },
    computed: {
      ...mapState([
        'problems',
        'answerId', 
        'score',
        'theScoreHeget'
    
      ]),

      tipsType () {
//        定义得分板文字信息
        const Score = this.theScoreHeget
        //const Score = this.score
        //this.totalScore = Score
        
        if(18< Score &&  Score < 50){
          return '您的满足过多';
        }
        else if(9 < Score && Score < 17){
          return "恭喜，您对孩子的满足正合适"
        }
        else if(Score < 8){
          return "您的满足过多"

        }
      },
     showScore()
    {
        return this.$store.getters.theScoreHeget
    }


    },
    methods: {
    showTips(){
        const Score = this.theScoreHeget
        //const Score = this.score
        //this.totalScore = Score
        
        if(18< Score &&  Score < 50){
           window.location.href = 'http://www.Baidu.com'
        }
        else if(9 < Score && Score < 17){
           window.location.href = '543'
        }
        else if(Score < 8){
           window.location.href = '123'

        }
       
        window.open()
        

    },
//      再来一次
      againPlay (){
        this.$store.commit('CLEAR_TIME')
        this.$router.push('/')
      },
      //defen 

    },

  }
</script>

<style>
  #doneModal{
    width:7.66rem;
    background: #fff;
    text-align: center;
  }
  #doneModal .top-score{
    display: flex;
    padding:1rem;
    background: #dd4b4b;
    justify-content: space-between;
    position: relative;
  }
  #doneModal .tips{
    width:4.67rem;
    height:1rem;
    background: url("../assets/tag_bg.png")no-repeat;
    background-size: cover;
    position: absolute;
    top:-0.5rem;
    left:50%;
    margin-left:-2.245rem;
    color: #fff;
    line-height: 1rem;
    box-shadow:1px 7px 7px -5px #9e7620;
  }
  #doneModal .top-score .score{
    width: 1.733rem;
    height:1.733rem;
    background: url('../assets/score_bg.png') no-repeat;
    background-size: cover;
    text-align: center;
    color: #fff;
  }
  #doneModal .score span{
    display: block;
    width:80%;
    margin:0 auto;
    font-size: 12px;
  }
  #doneModal .score span.score-num{
    font-size: 18px;
    margin-top: 0.4rem;
    border-bottom: 1px solid #fff;
  }
  #doneModal .result span{
    display: block;
  }
  #doneModal .result{
    display: flex;
  }
  #doneModal .result .item{
    text-align: center;
    color: #fff;
    margin-left:10px;
  }
  #doneModal .result .item .num{
    padding: 0.3rem 0.15rem;
    width:0.7rem;
    background: #fff;
    font-size: 22px;
    color: #dd4b4b;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;
  }
  #doneModal .desc{
    padding: 0.5rem 0;
    color: #dd4b4b;
  }
  #doneModal .btns{
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
  #doneModal .btns .row{
    justify-content: space-between;
    margin-bottom: 0.25rem;
  }
  #doneModal .btns .share-btn{
    width:100%;
  }
</style>
