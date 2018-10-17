import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {index: 0},    //添加meta里的index值，通过index值的大小控制页面跳转层级顺序
      component: () => import('@/pages/home/home')
    },
    {
      path: '/skill',
      name: "skill",
      meta: {index: 1},
      component: () => import('@/pages/skill/skill')
    },
    {
      path: '/experi',
      name: "experi",
      meta: {index: 1},
      component: () => import('@/pages/experi/experi')
    },
    {
      path: '/project',
      name: "project",
      meta: {index: 1},
      component: () => import('@/pages/project/project')
    }
  ]
})
