/* -------------------- Import -------------------- */
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

/* -------------------- Use -------------------- */
Vue.use(VueLazyload, {
  preLoad: 5,
});
