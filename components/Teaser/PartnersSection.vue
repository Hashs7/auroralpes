<template>
    <section class="section-partners">
        <h2>Nos partenaires</h2>
        <div class="partners-container">
            <img v-for="(p, i) in partners"
                 class="partners-logo"
                 :key="i"
                 :src="'https:' + p.fields.file.url"
                 :alt="p.fields.description">
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

<style scoped>
    h2 {
        position: relative;
    }
    .section-partners {
        text-align: center;
        padding: 250px 0 80px 0;
        background-color: white;
    }
    .partners-container {
        position: relative;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 700px;
        margin: 100px auto 0 auto;
    }
    .partners-logo {
        max-height: 140px;
        margin-bottom: 70px;
    }
</style>