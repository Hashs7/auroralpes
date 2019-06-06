import Vue from 'vue'
import {debounce} from "../utils";

Vue.directive('infocus', {
    isLiteral: true,
    inserted: (el, binding, vnode) => {
        let f = () => {
            let rect = el.getBoundingClientRect();
            let inView = (
                rect.width > 0 &&
                rect.height > 0 &&
                rect.top >= 15 &&
                rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) - 50)
            )
            if (inView) {
                el.classList.add(binding.value)
            } else {
                el.classList.remove(binding.value)
            }
        }
        const scrollFunction = debounce(() => f(), 200, true);
        window.addEventListener('scroll', scrollFunction, {passive: true});
        f()
    }
})