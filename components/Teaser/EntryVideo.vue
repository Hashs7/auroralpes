<template>
    <section class="entry-video">
        <div class="logo">
            Auroralpes logo
        </div>
        <div class="player">
            <iframe class="ytplayer" type="text/html" width="720" height="405"
                    :src="link+'?autoplay=1&loop=1&rel=0'"
                    frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="btn-rocket">

        </div>
    </section>
</template>

<script>
    export default {
        name: "EntryVideo",
        props: ['link']
    }
</script>

<style scoped>
    .entry-video {
        height: 100vh;
        background: linear-gradient(135deg, #ff2379, #ffa023);
        background-size: 400% 400%;

        -webkit-animation: bgAnime 30s ease infinite;
        -moz-animation: bgAnime 30s ease infinite;
        animation: bgAnime 30s ease infinite;
    }
    .ytplayer {
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