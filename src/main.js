import Vue from 'vue'  //引入主角vue.js，这里是因为在webpack.config中进行配置地址了
import App from './app'
import router from '@/router/router'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import '@/assets/style/test.css'
import Vue2Leaflet from 'vue2-leaflet';
import {post,fetch,patch,put} from './util/axios';
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

Vue.use(iView);
Vue.use(Vue2Leaflet);


console.log(config.devurl);

new Vue({
    el: '#app',
    router,
    components:{App}
})