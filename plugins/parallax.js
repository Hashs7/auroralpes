import Vue from 'vue';
import VueParallaxJs from 'vue-parallax-js'

export default () => {
    if (process.client) {
        Vue.use(VueParallaxJs);
    }
}