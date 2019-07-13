// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'


Vue.use(VueRouter)
const router=new VueRouter({
    // 配置路由规则
    routes: [
        {name:'login',path:'/login',component:Login},
        {
            path: '/',
            component: Home,
            children: [
                {name: 'welcome',path: '/',component: Welcome},
                {name:'404',path:'*',component:NotFound}

            ]
        },
    ]
})

router.beforeEach((to,from,next)=>{
    // ...每一次的跳转路路由会执行这个函数
    // to  目标路由对象，from 当前路由对象，to.path 目标路径
    // next()放行  next('./login) 拦截


    // 检测：1）如果是路由地址/login，，放行
    //      2）路由地址不是/login，但是存储了用户信息的，也放行
    //      3）上述两种情况都不是，则将被拦截到/login页面   登陆后才能够进入

    // 1）
    if(to.path=='/login') return next() 
    // 2）
    // 获取user信息
    const user=window.sessionStorage.getItem('hmtoutiao')
    if(user) return next()
    // 3）
    next('./login')
})
export default router
