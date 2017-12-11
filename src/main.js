// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './utils/flexsible'
import axios from 'axios'
Vue.config.productionTip = false
Vue.config.debug = true
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

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
