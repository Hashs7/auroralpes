<template>
    <section class="event-section">
        <div class="event-content o-container">
            <div class="event-description">
                <h2>{{title}}</h2>
                <p v-for="(p, i) in content" :key="i" >
                    <span v-for="(pa, j) in p.content" :key="j">
                        <strong v-if="pa.marks.length">{{pa.value}}</strong>
                        <template v-else>{{pa.value}}</template>
                    </span>
                </p>
            </div>
            <div class="event-support">
                <a :href="link" class="btn btn-primary">Soutenir le festival</a>
                <span class="ulule">
                    <Ulule />
                </span>
            </div>
        </div>
    </section>
</template>

<script>
    import Ulule from '~/assets/icons/ulule.svg'

    export default {
        name: "EventSection",
        props: ['eventDesc', 'link'],
        components: { Ulule },
        computed: {
            title() {
                const title = this.eventDesc.content.find(el => el.nodeType.includes('heading-'));
                return title.content[0].value;
            },
            content() {
                return this.eventDesc.content.filter(el => el.nodeType.includes('paragraph'));
            }
        },
        mounted() {
            console.log(this.eventDesc.content);
        }
    }
</script>

<style scoped lang="scss">
    .event-section {
        font-size: 20px;
        font-weight: $weight-medium;
        padding-top: 80px;
        color: white;
        background-color: $secondary-dark;
    }
    h2 {
        margin-bottom: 40px;
        color: $teal;
    }
    .event-support {
        margin-top: 68px;
    }
    .btn {
        vertical-align: middle;
    }
    .ulule {
        display: inline-block;
        width: 174px;
        height: 54px;
        margin-left: 64px;
        vertical-align: middle;

        svg {
            width: 100%;
            height: 100%;
        }
    }
</style>