<template>
  <div class="time-score">
    <div class="left-time">
      <div class="time">
        <div class="item">{{getMin}}</div>
        <div class="tag">:</div>
        <div class="item">{{getSec}}</div>
      </div>
      <div class="time-desc">考试结束倒计时</div>
    </div>
    <div class="score">
      <svg width="1.733rem" height="1.733rem" viewBox="0 0 200 200"  preserveAspectRatio="xMinYMin slice"  version="1.1"xmlns="http://www.w3.org/2000/svg">
        <g><circle cx="100" cy="100" r="98" stroke="#ffde00" stroke-width="6" fill="#dd4b4b"/></g>
        <text x="45" y="100" style="font-size: 48pt;fill: #fff;">100</text>
        <line x1="30" y1="120" x2="170" y2="120" style="stroke:#fff;stroke-width:2"/>
        <text x="55" y="160" style="font-size: 24pt;fill: #fff;">总分数</text>
      </svg>
    </div>
    <div class="begin-tip">答题开始咯</div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {

      }
    },
//根据答题完成状态 来决定是否清楚定时器
//重新开始答题isDone为false，如果从排行榜返回为true
    activated () {
      if(!this.$store.state.isDone){
        this.$store.commit('INTEVAL_TIME')
      }
    },
    computed: {
//    计算剩余时间
      remainTime: function () {
        return this.$store.state.allTime
      },
      getMin: function () {
        const min = parseInt(this.remainTime / 60)
        return min < 10 ? '0' + min : min
      },
      getSec: function () {
        const sec = this.remainTime % 60
        return sec < 10 ? '0' + sec : sec
      }
    },
    methods: {
    }
  }
</script>

<style>
  .time-score{
    width: 100%;
    height: 4.133rem;
    background: #dd4b4b;
    box-sizing: border-box;
    padding:0.8rem 1rem;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .time-score .left-time{
    text-align: center;
  }
  .time-score .left-time .time{
    display: flex;
  }
  .time-score .left-time .tag{
    font-size: 60px;
    line-height: 1.733rem;
    margin: 0 10px;
    color: #ffc7c7;
  }
  .time-score .left-time .item{
    width: 1.6rem;
    height: 1.733rem;
    display: inline-block;
    background: #fff;
    font-size: 30px;
    color: #dd4b4b;
    line-height:1.733rem;
    -webkit-border-radius:10px;
    -moz-border-radius:10px;
    border-radius:10px;
  }
  .time-score .time-desc{
    color: #fff;
    font-size: 14px;
    margin-top:0.27rem;
  }
  .begin-tip{
    width:4.64rem;
    height: 1.067rem;
    background: url("../assets/tag_bg.png") no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: -0.5335rem;
    left:50%;
    margin-left:-2.32rem;
    color: #fff;
    text-align: center;
    line-height:1rem;
    font-size: 18px;
  }

</style>
