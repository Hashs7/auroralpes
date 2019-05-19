<template>
    <main id="main" role="main">
        <header>
            <Navigation />
        </header>
        <nuxt/>
    </main>
</template>

<script>
    import Navigation from '@/components/Navigation';

    export default {
        components: { Navigation },
    }
</script>
<style>
    .page-loader {
        background-color: #f0f;
        height: 100vh;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
    }
    .page-loader-enter-active {
        animation: bounce-in .5s;
    }
    .page-loader-leave-active {
        background-color: #f00;
        animation: bounce-in .5s;
    }

    @keyframes bounce-in {
        0% {
            width: 0;
        }
        50% {
            width: 100vw;
        }
        100% {
            width: 0;
        }
    }
</style>
