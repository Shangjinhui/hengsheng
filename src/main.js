import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import '@/assets/js/element'
import 'wowjs/css/libs/animate.css'

import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'

import '@/assets/css/public.css'
import '@/assets/css/index.scss'
import until from '@/untils/until'
// console.log(until,'---------')
Vue.prototype.$until = until;
import { fetch } from '@/untils/fetch'
Vue.prototype.$fetch = fetch;

// import '@/untils/filter'

import qs from "qs";
Vue.prototype.$qs = qs;

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ ease: 'ease', speed: 500 })


Vue.prototype.$imgurl = 'http://demo.188388.cn:8083/zh_hundsun/upload/';
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
})
router.afterEach((to, from, next) => {
    document.getElementById('app').style.display = "block";
    window.scrollTo(0, 0);
    NProgress.done()
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')