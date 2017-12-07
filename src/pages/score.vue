<template>
    <div id="score-wrap">
      <div class="banner"> </div>
      <div class="list">
        <div class="list-tag">
          <span class="item">头像</span>
          <span class="item name">名称</span>
          <span class="item">排名</span>
          <span class="item">分数</span>
        </div>
        <div class="list-con">
          <ul>
            <li v-for="(item, key) in sortScore" :class="{active: item.uid ==uid}">
              <img class="avatar item" :src="item.avatar" alt="">
              <span class="name item" v-text="item.name"></span>
              <span class="top-num item top" v-if="key < 3"></span>
              <span class="top-num item" v-else v-text="key + 1"></span>
              <span class="score item"><i v-text="item.score">40</i>分</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        rankList: [],
        uid: this.$store.state.userInfo.uid
      }
    },
    created () {
      this.$http.get('api/rankList').then((res) => {
        this.rankList = res.data
      })
    },
    computed: {
      sortScore () {
        let arr = this.rankList
        arr.push(this.$store.state.userInfo)
        return arr.sort(this.sortFunc('score'))
      }
    },
    methods: {
      sortFunc (keyName) {
        return (a,b) => {
          let value1 = a[keyName];
          let value2 = b[keyName];
          return value2 - value1;
        }
      }
    }
  }
</script>
<style>
  #score-wrap .banner{
    width:100%;
    height:4.133rem;
    background: url("../assets/score_banner.png");
    background-size: cover;
  }
  #score-wrap .list-tag{
    padding:0.2rem 0.5rem;
    background: #ececec;
    display: flex;
  }
  #score-wrap .list-tag .item{
    width: 1.133rem;
    text-align: center;
  }
  #score-wrap .list-tag .name{
    flex-grow:2;
    padding: 0 0.5rem;
    text-align: left;
  }
  #score-wrap .list-con li{
    display: flex;
    align-items: center;
    padding: 0.2rem 0.5rem;
    border-bottom:1px solid #f5f5f5;
  }
  #score-wrap .list-con li.active{
    background: #e25c5c;
    color: #fff;
  }
  #score-wrap .list-con li.active .top-num{
    color: #333;
  }
  #score-wrap .list-con li.active .score i{
    color: #fff;
  }
  #score-wrap .list-con .item{
    width: 1.133rem;
    text-align: center;
  }
  #score-wrap .list-con .top-num{
    height: 0.8rem;
    width:0.8rem;
    line-height:0.8rem;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
    background: #e8e8e8;
    margin-right: 0.25rem;
  }
  #score-wrap .list-con .name{
    flex-grow:2;
    padding: 0 0.5rem;
    text-align: left;
  }
  #score-wrap .list-con .avatar{
    height: 1.133rem;
    width: 1.133rem;
    border-radius: 50%;
  }
  #score-wrap .list-con .score i{
    color: #e05d5d;
    font-style: normal;
  }
  #score-wrap .list-con .top{
    display: inline-block;
    height:0.8rem;
    width:0.8rem;
    background: url("../assets/top_icon.png")no-repeat;
    background-size:100% 100%;
  }
</style>
