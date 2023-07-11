import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:"/login",
        name:"Login",
        component:() => import("../view/Login.vue")
    },
    {
        path:"/search",
        name:"Search",
        component:() => import("../view/search.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router