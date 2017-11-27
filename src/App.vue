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
  }
  .yellow-bg{
    background: #faab00;
  }
  .green-bg{
    background: #8dd817;
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
  }
  #app {
    width: 10rem;
    height:100%;
    background: #fff;
    margin:0 auto;
  }
</style>
