import Vue from 'vue'

Vue.directive('infocus', {
    isLiteral: true,
    inserted: (el, binding, vnode) => {
        let f = () => {
            let rect = el.getBoundingClientRect();
            let inView = (
                rect.width > 0 &&
                rect.height > 0 &&
                rect.top >= 70 &&
                rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) - 70)
            )
            if (inView) {
                el.classList.add(binding.value)
            } else {
                el.classList.remove(binding.value)
            }
        }
        window.addEventListener('scroll', f);
        f()
    }
})