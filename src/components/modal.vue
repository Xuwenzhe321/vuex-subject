<template>
    <div id="modal">
      <slot>obj is null</slot>
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
  #modal{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
