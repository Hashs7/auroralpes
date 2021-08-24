import Vue from 'vue';
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'

Object.defineProperty(Vue.prototype, 'locomotiveScroll', {
  value: locomotiveScroll
});
