/*
 * @Author: wanggang
 * @Date: 2019-08-12 21:09:40
 * @Description:
 */
import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
// eslint-disable-next-line import/no-unresolved

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/',
        //     name: 'index',
        //     component: Index,
        // },
        {
            path: '/',
            component: Index,
            children: [
                {
                    path: '/',
                    component: () => import('./components/index/LearnOne/Demo1.vue'),
                },
                {
                    path: 'Demo',
                    component: () => import('./components/index/LearnTwo/Demo.vue'),
                },
                {
                    path: 'Advance',
                    component: () => import('./components/index/LearnThree/Advance.vue'),
                },
            ],
        },
    ],
});
