<template>
    <section class="entry-video">
        <div class="entry-logo">
            <Logo />
        </div>
        <iframe class="ytplayer" type="text/html" width="720" height="405"
                :src="link+'?autoplay=1&loop=1&rel=0'"
                frameborder="0" allowfullscreen></iframe>
        <div class="btn-rocket">
            <Rocket />
        </div>
    </section>
</template>

<script>
    import Rocket from '~/assets/icons/rocket.svg'
    import Logo from '~/assets/icons/aurorales-logo-white.svg'

    export default {
        name: "EntryVideo",
        components: { Rocket, Logo },
        props: ['link']
    }
</script>

<style lang="scss">
    .entry-video {
        position: relative;
        display: flex;
        height: 100vh;
        background: linear-gradient(135deg, #ff2379, #ffa023);
        background-size: 400% 400%;
        -webkit-animation: bgAnime 30s ease infinite;
        -moz-animation: bgAnime 30s ease infinite;
        animation: bgAnime 30s ease infinite;
    }
    .entry-logo {
        position: absolute;
        top: 16px;
        left: 0;
        right: 0;
        margin: auto;
        width: 140px;
        height: 90px;
        svg {
            width: 100%;
            height: 100%;
        }
    }
    .btn-rocket {
        z-index: 1;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100px;
        svg {
            vertical-align: bottom;
        }
    }
    .ytplayer {
        margin: auto;
        width: 100%;
        height: calc(100vh - 226px);
    }

    @-webkit-keyframes bgAnime {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes bgAnime {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes bgAnime {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
</style>