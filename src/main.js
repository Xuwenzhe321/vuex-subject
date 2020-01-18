// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './utils/flexsible'
import axios from 'axios'
import global_ from './var'
Vue.prototype.GLOBAL = global_
Vue.config.productionTip = false
Vue.config.debug = true
Vue.prototype.$http = axios
/* eslint-disable no-new */
import Vuex from 'vuex'

Vue.use( Vuex );
const test = new Vuex.Store({
    state:{ 
        theScoreHeget:0
      }
    //待添加
})



new Vue({
  el: '#app',
  router,

  data: function(){
    return {
        theScoreHeget:0
    }
},
render: h => h(App),

  store,
  template: '<App/>',
  components: { App },

}).$mount('#app');




router.beforeEach((to, from, next) => {
  let isDone = store.state.isDone
  console.log(to.path)
  console.log(from.path)
  if(to.path==='/question' && from.path==='/score') {
    store.commit('IS_DONE',true)
    next()
  }else if(from.path ==='/'){
    store.commit('INIT_DATA')
    next()
  }
  else{
    next()
    // console.log('小时')
  }
})
