<template>
    <div>
      <router-link :to="{path: '/question'}" tag="button" class="begin-btn">开始答题</router-link>
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
  .begin-btn{
    width: 3.8rem;
    height: 1rem;
    background: #e14f4f;
    color: #fff;
    -webkit-border-radius:0.5rem;
    -moz-border-radius:0.5rem;
    border-radius:0.5rem;
    border:0;
  }
</style>
