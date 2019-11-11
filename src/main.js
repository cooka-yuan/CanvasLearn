import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element';
import './plugins/layer';
import './plugins/animate.css';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

window.vm = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
