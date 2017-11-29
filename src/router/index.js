import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import question from '../pages/question'
import score from '../pages/score'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/question',
      name: 'question',
      component: question
    },
    {
      path: '/score',
      name: 'score',
      component: score
    }
  ]
})
