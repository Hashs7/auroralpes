<template>
    <section class="section-partners">
        <h2>Nos partenaires</h2>
        <div class="o-container">
            <div class="partners-container">
                <img v-for="(p, i) in partners"
                     class="partners-logo"
                     :key="i"
                     :src="'https:' + p.fields.file.url"
                     :alt="p.fields.description">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PartnersSection",
        props: ['partners'],
        mounted() {
            console.log(this.partners, 'part');
        }
    }
</script>

<style scoped lang="scss">
    h2 {
        position: relative;
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
            padding: 80px 0 20px 0;
        }
        @media #{$sm-down} {
            padding: 60px 0 20px 0;
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
        max-height: 140px;
        margin: 0 16px 70px 16px;
        @media #{$lg-down} {
            max-height: 100px;
        }
        @media #{$md-down} {
            max-height: 66px;
            margin-bottom: 40px;
        }
    }
</style>