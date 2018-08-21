import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

export const appData = {
    app_icon: 'code',
    body_message: 'Hello world!',
    footer_message: 'Made with ❤️ in Mountain View, California',
    title: 'Vue, Vuetify, Webpack'
};

new Vue({render: h => h(App)}).$mount('#app');