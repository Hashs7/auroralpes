<template>
    <p>Page Festival</p>
</template>

<script>
    import { TweenMax, Back } from 'gsap';

    export default {
        name: "festival",
        mounted() {
        },
        transition: {
            mode: 'out-in',
            css: false,
            beforeEnter (el) {
                console.log('before');
                TweenMax.set(el, {
                    transformPerspective: 600,
                    perspective: 300,
                    transformStyle: 'preserve-3d'
                })
            },
            enter (el, done) {
                TweenMax.to(el, 1, {
                    rotationY: 360,
                    transformOrigin: '50% 50%',
                    ease: Back.easeOut
                })
                done()
            },
            leave (el, done) {
                TweenMax.to(el, 1, {
                    rotationY: 0,
                    transformOrigin: '50% 50%',
                    ease: Back.easeIn
                })
                done()
            }
        }
    }
</script>

<style scoped>

</style>