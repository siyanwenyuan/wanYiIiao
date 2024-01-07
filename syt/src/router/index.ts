//需要使用这两个方法，则从插件中引入
import {createRouter, createWebHistory} from "vue-router";

export default createRouter({

    //路由采用历史模式

    history: createWebHistory(),

    //设置路由器，管理路由
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue')
        },
        //此处设置重定向，也即是当访问/ 直接定向到home路由
        {
            path: '/',
            redirect: '/home'
        }
    ],
    //添加有一个滚动行为,当路由切换的时候，滚动条自动到顶部位置
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})
