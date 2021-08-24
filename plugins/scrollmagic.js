/* -------------------- Import -------------------- */
import Vue from 'vue';
import ScrollMagic from 'scrollmagic';

/* -------------------- Plugin -------------------- */
const VueScrollMagic = {
  install(Vue) {
    Vue.prototype.$scrollMagic = ScrollMagic;
  },
};

/* -------------------- Use -------------------- */
Vue.use(VueScrollMagic);
