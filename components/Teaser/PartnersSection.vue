<template>
    <section class="section-partners">
        <h2 class="showTitle">Nos partenaires</h2>
<!--        <h2 v-infocus="'showTitle'">Nos partenaires</h2>-->
        <div class="o-container">
            <div class="partners-container">
                <a v-for="(p, i) in partners"
                   :href="p.fields.description" target="_blank" rel="nofollow noopener">
                    <img class="partners-logo"
                        :key="i"
                        :src="'https:' + p.fields.file.url"
                        :alt="p.fields.title">
                </a>
            </div>

            <h3 class="action-title">Venez découvrir notre projet et nous aider à le réaliser</h3>

            <a :href="link"
               class="btn-event"
               target="_blank"
               rel="nofollow noopener">
                <RippleButton name="Plus d'informations" :bgDark="true"/>
            </a>
        </div>
    </section>
</template>

<script>
    import RippleButton from '@/components/UI/RippleButton';

    export default {
        name: "PartnersSection",
        props: ['partners', 'link'],
        components: { RippleButton }
    }
</script>

<style scoped lang="scss">
    h2 {
        position: relative;
    }
    .action-title {
        font-weight: normal;
        font-size: 20px;
        margin: 24px 0;
    }
    .section-partners {
        text-align: center;
        padding: 250px 0 80px 0;
        background-color: white;
        @media #{$xl-down} {
            padding: 150px 0 40px 0;
        }
        @media #{$lg-down} {
            padding: 120px 0 40px 0;
        }
        @media #{$md-down} {
            padding: 150px 0 20px 0;
        }
        @media #{$sm-down} {
            padding: 120px 0 20px 0;
        }
    }
    .partners-container {
        position: relative;
        z-index: 10;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 700px;
        margin: 100px auto 0 auto;

        @media #{$lg-down} {
            margin-top: 80px;
        }
        @media #{$md-down} {
            margin-top: 50px;
        }
    }
    .partners-logo {
        max-height: 110px;
        margin: 0 16px 70px 16px;
        transition: transform .2s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
        @media #{$lg-down} {
            max-height: 100px;
        }
        @media #{$md-down} {
            max-height: 66px;
            margin-bottom: 40px;
        }
    }
</style>