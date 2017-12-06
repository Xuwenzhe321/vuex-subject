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
            <li>
              <img class="avatar item" src="../assets/avatar.jpg" alt="">
              <span class="name item" >哎哟不错哟</span>
              <span class="top-num item">1</span>
              <span class="score item"><i>40</i>分</span>
            </li>
            <li>
              <img class="avatar item" src="../assets/avatar.jpg" alt="">
              <span class="name item" >哎哟不错哟</span>
              <span class="top-num item">1</span>
              <span class="score item"><i>40</i>分</span>
            </li>
            <li>
              <img class="avatar item" src="../assets/avatar.jpg" alt="">
              <span class="name item" >哎哟不错哟</span>
              <span class="top-num item">1</span>
              <span class="score item"><i>40</i>分</span>
            </li>
            <li>
              <img class="avatar item" src="../assets/avatar.jpg" alt="">
              <span class="name item" >哎哟不错哟</span>
              <span class="top-num item">1</span>
              <span class="score item"><i>40</i>分</span>
            </li>
            <li>
              <img class="avatar item" src="../assets/avatar.jpg" alt="">
              <span class="name item" >哎哟不错哟</span>
              <span class="top-num item">1</span>
              <span class="score item"><i>40</i>分</span>
            </li>
            <li>
              <img class="avatar item" src="../assets/avatar.jpg" alt="">
              <span class="name item" >哎哟不错哟</span>
              <span class="top-num item">1</span>
              <span class="score item"><i>40</i>分</span>
            </li>
            <li>
              <img class="avatar item" src="../assets/avatar.jpg" alt="">
              <span class="name item" >哎哟不错哟</span>
              <span class="top-num item">1</span>
              <span class="score item"><i>40</i>分</span>
            </li>
            <li>
              <img class="avatar item" src="../assets/avatar.jpg" alt="">
              <span class="name item" >哎哟不错哟</span>
              <span class="top-num item">1</span>
              <span class="score item"><i>40</i>分</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {}
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
  #score-wrap .list-con .item{
    width: 1.133rem;
    text-align: center;
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
</style>
