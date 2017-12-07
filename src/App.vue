<template>
  <div id="app" :style="{height:height+'px'}">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      height: null
    }
  },
  mounted () {
    const height = window.innerHeight
    this.height = height
  }
}
</script>

<style>
  body{
    background: #dbdbdb;
    font-size: 14px!important;
  }
  *{
    margin:0;
    padding:0;
  }
  .red-bg{
    background: #eb6464;
    box-shadow: 0 2px 2px 0 #d15050;
  }
  .yellow-bg{
    background: #faab00;
    box-shadow: 0 2px 2px 0 #c68d11;
  }
  .green-bg{
    background: #8dd817;
    box-shadow: 0 2px 2px 0 #6eac0c;
  }
  ul,li{
    margin:0;
    padding:0;
  }
  li{
    list-style:none;
  }
  button,input{
    outline:0;
    font-size: 14px;
  }
  .flex{
    display: flex;
  }
  #app {
    width: 10rem;
    height:100%;
    background: #fff;
    margin:0 auto;
    position: relative;
  }
</style>
