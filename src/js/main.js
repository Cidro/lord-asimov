import './bootstrap.js';
import Vue from 'vue';
import App from './App.vue';

import Widget from './components/Widget.vue';
Vue.component('widget', Widget);

Vue.config.debug = true;

global.App = new Vue({
    el: 'body',
    components: {
        App
    }
});
