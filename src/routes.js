import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import {createRouter,createWebHistory} from 'vue-router';

const routes = [
    {
        name:'Home',
        component: Home,
        path:'/'
    },
    {
        name:'SignUp',
        component: SignUp,
        path:'/sign-up'
    },
    {
        name:'SignIn',
        component: SignIn,
        path:'/sign-in'
    },
];
const router=createRouter({
    history:createWebHistory(),
    routes:routes
})
export default router;