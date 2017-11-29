<template>
    <div class="item-con">
      <div class="num question-item">答题数<span class="remain">{{ problems.length-itemNum }}</span></div>
      <div class="title question-item">{{ problems[itemNum].problemTitle }} <span class="triangle"></span></div>
      <div class="question-lists">
        <li v-for="(item, key) in problems[itemNum].answers"><input v-model="chooseId" type="radio" :value="item" :id="item.answerId" name="answer"><label :for="item.answerId">{{ item.text }}</label></li>
      </div>
      <div class="btns">
        <button class="red-bg next-btn" @click="nextItem" v-if="itemNum < problems.length-1">下一题</button>
        <button class="green-bg done-btn" @click="postAll" v-else>交卷</button>
      </div>
      <modal></modal>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import modal from '../components/modal'
  export default {
    components:{
      'modal': modal
    },
    data () {
      return {
        chooseId: null
      }
    },
    created () {
      this.initData()
    },
    mounted () {
    },
    computed: {
      ...mapState([
        'itemNum',
        'allTime',
        'timer',
        'problems'])
    },
    methods: {
      ...mapActions([
        'initData','addItem'
      ]),
      nextItem () {
        console.log(this.itemNum)
        if(this.chooseId){
          let obj = {}
          obj.answerId = this.chooseId.answerId
          obj.fid = this.chooseId.fid
          this.chooseId = null
          this.addItem(obj)
        }else{
          alert('请选择')
        }
      },
      postAll () {
        if(this.chooseId){
          let obj = {}
          obj.answerId = this.chooseId.answerId
          obj.fid = this.chooseId.fid
          this.chooseId = null
          this.addItem(obj)
          clearInterval(this.timer)
          //this.$router.push('score')
        }else{
          alert('请选择')
        }
      }
    }
  }
</script>

<style>
  .item-con{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 1.5rem 1rem;
  }
  .item-con .question-item{
    width:100%;
    border: 1px solid #dbdbdb;
    padding: 0.35rem;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
    position: relative;
  }
  .item-con .question-item:first-child{
    border-bottom: 0;
  }
  .item-con .num .remain{
    padding: 0.1rem 0.2rem;
    background: #dd4b4b;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius:4px;
    color: #fff;
    margin-left: 0.1rem;
  }
  .item-con .triangle{
    display:block;
    width:0;
    height:0;
    border-width:10px;
    border-style:solid;
    border-color: #dbdbdb transparent transparent transparent;
    position:absolute;
    bottom:-20px;
    left: 50%;
    margin-left:-10px;
  }
  .item-con .triangle:after{
    content: '';
    display:block;
    width:0;
    height:0;
    border-width: 10px;
    border-style:solid;
    border-color: #fff transparent transparent transparent;
    position:absolute;
    top:-11px;
    left:-10px;
  }
  .question-lists{
    margin-top:30px;
  }
  .question-lists li{
    display: flex;
    line-height: 40px;
    align-items: center;
  }
  .question-lists input[type="radio"]{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 0.5rem;
    height: 0.5rem;
    outline: 0;
    margin-right:0.25rem;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAC20lEQVRYR82YjVEbQQyFpQoCFSRUAKkg1jaAU0GggjgVxFQQU0FIBTENnEwFgQ6cCmIqUObd6G7k8/3iu4GdsYfx3O1++/Sk1cL0hgYfy6KqJ2Z2zsxPIrI7Zr7BMFmWXTLznIjwOalZHEBrM1unlO6HwPWCwe6J6CsRLRoAmtYE2IqIbvuo1gmjqlDgBxF9KFY0s2dmXhPRlogeiQiLAvgCz5nZnJnfBUI8901E8E7jaIVR1e9EtAwQD8y86poUz6vqzMyWzPwprL4UkZsmmkYYVf1JRFd40ZW46gNRXcih1kGpOxG5rgOqhVFVqAFVAPIEw4oIpH7R8IzbMPO5T3AjIqXixaQHMO6R3wFk1sd8XZQ1QJ+rSu/BeNb8cRPCpACBQUcZDrT1kEHpj3GjVZgyPER0LSJ3o1CESeAh+LsuXFWYf0hRM/ubUipTeWygLMvgH2TZTkRODzwTvUJEB/EcE6hprVIZVUVIvviip2OYtm0DWZbt3Du/RCQvIREmDxER3YsIqu6kI2x+KyJnVRhrqwFjk8VaJiK5KPmXpzSUwagtSBPAQP28nlVhYrpNktLVzVRSXERk85rKwLQ4//aV8VC9Dc8Apkg1M3tIKSFsk44im2KBfbU6o6pFKamtM6W7pzqXCqk7K3AMFdrJohBNEStVxUGJTvA5pVQ29W2nNnpWNNOjDlUts6ha0w76GTN7ZOb33mQj/8fsZ9CwQ5W8M2Dmi8Z+xlM8egdd/9kYh6ZXeYAACKO90wsGi00WgI5SSFUBgAJXgPTrgQNQbCkAhGvG7VADqSraEnivMGqZytW5uu5NUSG8i74Vv6HNaLxXe0gu/dnYMbYewr1ulGa2clPHzWyICB+M4kaJvxGKvX7Izbround1wripIfHCzBaVa2tr1PzyhxDhFtr5H4peMHFFr55zM5vVqIVLH1IWiq27lBjkmb5mRW+CfqTv803PDVbm2AXb3v8POaeKMyEfPK0AAAAASUVORK5CYII=")no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .question-lists input[type="radio"]:checked{
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAACnUlEQVRYR82YUXLaQAyGJWyeS2YCryU3SE8QOEHTE9SJnXMUThD6HDv1DUpPEHqC0BvQ15AZ4DlrqyNqO8Ze22t7mYHHHa/20y+tVgLhhH54QixQG2ZjWb3ANK8IYAQAl+wMAfQQYBs5tkCA5bnr/qrrqDLMy93dJYbhN0C8VjqEaEsA824QTM98f6WypxKGlXgzjHtEtFQM5r4h2gLizBTi+5nvx+pJTZXCRGo8AWKvEUhqEwEsu0J8KVOpEOb19tYixHsdIAkTh67TGQ8eHpYy56Qwe0WIntuqId1PtDWD4EIWshzMxrKGwjCetSqSoYpCNs4C5WDWjjMHgM9HUeXQ6LTvupP00gHM2nG4djxpBtkBAOcI16QP6fzJhisLswCAK40wO0IcccIWOHqgTgLD9USY5uYYIGzz1bavCfFn2j4RrQaedxGvJTD7q9zp/NAEkyjC9srqFSF+iq96AqMxcZVBIseTUKVhdORLXRDmkcDY9goQP0rCNDWF8N8MY4KIX0vC2ASEzf3uuy7f4vcWYu04JDsoHdMX2/ZLgMZ912V1S3NEcoYEpkAZIvIHnncTG5EBYRjenD8++g1ACpUpzJkyoJYgBTlT8Qxkgfj2YRjOWygSi51PYJU6kwVKQve/C2zU90jrjGoFzoWsBQgQ/e173jBXgXlh7ThKtSYG0tAJyt+mCEb51eZ3BRETrxo8IztTiGG6pzndfoa9i3KHR4v33qOB22VbiOhPNwhGlZ1eUriO1QMD5MIjTeC0N9FVn2lW6OD9yqpXPTcR8Q1rHbKi0KSBVCfKWcWLXZYi3APzRDlrNVGmT4hmKe7mVSeHHRHxrD3RNmvLXI76We72930IEfUQMfkXAgAWcTtR5yJWhqmOsbbfnhTMP9w1oTODWsgKAAAAAElFTkSuQmCC")no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .btns{
    margin-top: 0.5rem;
    text-align: center;
  }
  .btns button{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    -webkit-border-radius:0.5rem;
    -moz-border-radius:0.5rem;
    border-radius:0.5rem;
    width: 2.3rem;
    height: 1rem;
    color: #fff;
    font-size: 16px;
  }
  .btns button.next-btn{
    box-shadow: 0 2px 2px 0 #d15050;
  }
  .btns button.pass-btn{
    box-shadow: 0 2px 2px 0 #c68d11;
  }
  .btns button.done-btn{
    box-shadow: 0 2px 2px 0 #6eac0c;
  }
  .pass-chance-num{
    text-align: center;
    margin-top: 0.5rem;
    color: #666;
  }
</style>
