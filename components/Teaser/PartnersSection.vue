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
    .section-partners {
        text-align: center;
        padding: 150px 0;
        background-color: white;
    }
    .partners-container {
        margin: 100px auto 0 auto;
        max-width: 700px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .partners-logo {
        max-height: 140px;
    }
</style>