<template>
  <div id="doneModal">
    <div class="top-score">
      <div class="tips">快看看成绩吧</div>
      <div class="score">
        <span class="score-num" v-text="answerId.length*score"></span>
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
        <button class="red-bg" @click="againPlay">再来一次</button><button class="yellow-bg" @click="shareBorad">考试排行榜</button>
      </div>
      <div class="row">
        <button class="green-bg share-btn">分享好友</button>
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
        'allTime',
        'problems',
        'answerId',
        'score'
      ]),
      tipsType () {
        const Score = this.answerId.length * this.score
        this.totalScore = Score
        if(70< Score &&  Score < 100){
          return '荣获【学霸】的牛逼称号<br>苍老师都以你为荣';
        }
        else if(50 < Score && Score < 70){
          return "还差一点哦，加油！"
        }
        else if(Score < 50){
          return "荣获【学渣】称号<br>老师都被你气的吐血了"

        }
      }
    },
    methods: {
      shareBorad () {
        this.$store.commit('GET_RESULT', this.totalScore)
        this.$router.push('score')
      },
      againPlay () {
        this.$router.push('/')
      }
    }
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
