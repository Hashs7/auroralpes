<template>
    <section class="asso-section">
        <span class="wave wave-up">
            <WaveUp />
        </span>

        <div class="asso-content">
            <div class="o-container">
                <div class="asso-description">
                    <h2>{{title}}</h2>
                    <p v-for="(p, i) in content" :key="i" >{{p.content[0].value}}</p>
                </div>
                <div class="asso-support">
                    <a :href="link" class="btn btn-primary">Nous rejoindre</a>
                </div>
            </div>
        </div>

        <span class="wave wave-down">
            <WaveDown />
        </span>
    </section>
</template>

<script>
    import WaveUp from '~/assets/icons/wave-up.svg'
    import WaveDown from '~/assets/icons/wave-down.svg'

    export default {
        name: "AssoSection",
        props: ['assoDesc', 'link'],
        components: { WaveUp, WaveDown },
        computed: {
            title() {
                const title = this.assoDesc.content.find(el => el.nodeType.includes('heading-'));
                return title.content[0].value;
            },
            content() {
                return this.assoDesc.content.filter(el => el.nodeType.includes('paragraph'));
            }
        },
        mounted() {
            console.log(this.assoDesc.content);
        }
    }
</script>

<style scoped lang="scss">
    .asso-section {
        position: relative;
    }
    .asso-content {
        text-align: right;
    }
    .wave {
        svg {
            vertical-align: bottom;
        }
    }
    .wave-down {
        height: 100%;
        background-color: white;
    }
    .asso-content {
        background-color: white;
        padding: 10px 0 274px 0;
    }
</style>