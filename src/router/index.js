import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/addTeacher'
    },
    {
        path: '/addTeacher',
        component: () => import('../views/AddTeacher'),
    },
    {
        path: '/addCurriculum',
        component: () => import('../views/AddCurriculum'),
    },
    {
        path: '/curriculumList',
        component: () => import('../views/CurriculumList'),
    },
    {
        path: '/addVideo',
        component: () => import('../views/AddVideo'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, saveTop) {
        if (saveTop) {
            return saveTop;
        } else {
            return {x: 0, y: 0}
        }
    },
})

export default router
