import Vue from 'vue';
import Router from 'vue-router';
import test from '@/pages/project-demo/test1.vue';
import test2 from '@/pages/project-demo/test2.vue';
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'test',
        component: test
    },{
        path: '/t2',
        name: 'test2',
        component: test2
    }]
});
