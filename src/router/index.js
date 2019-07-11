// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'

Vue.use(VueRouter)
const router=new VueRouter({
    // 配置路由规则
    routes: [
        {name:'login',path:'/login',component:Login}
    ]
})

export default router
