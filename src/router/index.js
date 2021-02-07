import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/index'
    },
    {
      path:'/index',
      component: () => import('../views/index'),
        children:[
            {
                path: '',
                redirect: '/home'
            },
            {
                path: '/home',
                component: () => import('../views/home')
            },
            {
                path: '/category',
                component: () => import('../views/category'),
                children:[
                    {
                        path: 'hot',
                        component: () => import('../components/category/hot')
                    },
                    {
                        path: 'all',
                        component: () => import('../components/category/all')
                    },
                    {
                        path: 'math',
                        component: () => import('../components/category/math')
                    },
                    {
                        path: 'english',
                        component: () => import('../components/category/english')
                    },
                    {
                        path: 'program',
                        component: () => import('../components/category/program')
                    },
                ]
            },
            {
                path: '/curriculum',
                component: () => import('../views/curriculum')
            },
            {
                path: '/profile',
                component: () => import('../views/profile'),
                children:[
                    {
                        path:'',
                        redirect:'userMg'
                    },
                    {
                        path: 'userMg',
                        component:()  => import('../components/profile/userMg/userMg')
                    },
                    {
                        path: 'browsed',
                        component:()  => import('../components/profile/browsed/browsed')
                    },
                    {
                        path: 'favorites',
                        component:()  => import('../components/profile/favorites/favorites')
                    },

                ]
            },
        ]
    },
    {
        path: '/login',
        component: () => import('../views/login'),
        children:[
            {
                path:'',
                redirect:'toLogin'
            },
            {
                path:'toLogin',
                component: () => import('../components/login/toLogin'),
                children: [
                    {
                        path:'',
                        redirect:'user'
                    },
                    {
                        path:'user',
                        component: () => import('../components/login/userLogin'),
                    },
                    {
                        path:'admin',
                        component: () => import('../components/login/adminLogin'),
                    },
                ]
            },
            {
                path:'toSign',
                component: () => import('../components/login/toSign'),
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
