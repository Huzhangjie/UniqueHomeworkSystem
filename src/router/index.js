import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/Home.vue'], resolve),
      meta: { title: '自述文件'},
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../pages/Dashboard.vue'], resolve),
          meta: { title: '系统首页'}
        },
       
        {
          path: '/homework',
          component: resolve => require(['../pages/HomeWork.vue'], resolve),
          meta: { title: '我的作业'}
        },
        {
          path: '/homeworkreport',
          component: resolve => require(['../pages/HomeWorkReport.vue'], resolve),
          meta: { title: '我的作业报告'}
        },
        {
          path: '/zhishidian',
          component: resolve => require(['../pages/Dashboard.vue'], resolve),
          meta: { title: '知识点掌握'}
        },
        {
          path: '/discuss',
          component: resolve => require(['../pages/Dashboard.vue'], resolve),
          meta: { title: '讨论区'}
        },
        {
          path: '/self',
          component: resolve => require(['../pages/Dashboard.vue'], resolve),
          meta: { title: '自主做题'}
        },
        {
          path: '/message',
          component: resolve => require(['../pages/Message.vue'], resolve),
          meta: { title: '我的消息'}
        },
        {
          path: '/pk',
          component: resolve => require(['../pages/Dashboard.vue'], resolve),
          meta: { title: 'PK答题'}
        },
        {
          path: '/modify',
          component: resolve => require(['../pages/ModifyUser.vue'], resolve),
          meta: {title: '修改信息'}
        },
        {
          path: '/homeworkdoing',
          component: resolve => require(['../pages/HomeWorkDoing.vue'], resolve),
          meta: {title: '做作业'}
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../pages/Login1.vue'], resolve)
    },
    // {
    //   path: '/ModifyUser',
    //   component: resolve => require(['../pages/ModifyUser.vue'], resolve)
    // },
    {
      path: '/404',
      component: resolve => require(['../pages/404.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

// 注册全局钩子拦截导航
router.beforeEach((to, from, next) => {
  // console.log(from.path)
  let token = store.state.token
  if(to.path == from.path) {
    return;
  }
  if(to.path != '/login') {
    if(token) {
      next()
    } else {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      })
    }
  }  
  next()
})

export default router


