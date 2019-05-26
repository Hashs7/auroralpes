<template>
    <section class="asso-section">
        <span class="wave wave-up">
            <WaveUp />
        </span>
        <div id="asteroid">
            <div class="asteroid"></div>
        </div>

        <div class="asso-content">
            <div class="o-container">
                <div class="asso-description">
                    <h2>{{title}}</h2>
                    <p v-for="(p, i) in content" :key="i" >
                    <span v-for="(pa, j) in p.content" :key="j">
                        <strong v-if="pa.marks.length">{{pa.value}}</strong>
                        <template v-else>{{pa.value}}</template>
                    </span>
                    </p>
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
    import Asteroid from '@/components/Scene/Asteroid';

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
            // Asteroid();
            console.log(this.assoDesc.content);
        }
    }
</script>

<style scoped lang="scss">
    .asso-section {
        position: relative;
        top: -30px;
        font-size: 20px;
        font-weight: $weight-medium;
    }
    .asso-content {
        text-align: right;
        position: relative;
        z-index: 10;
    }
    #asteroid {
        position: absolute;
        z-index: 15;
    }
    .wave {
        svg {
            display: block;
            vertical-align: bottom;
        }
    }
    .wave-down {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateY(calc(100% - 1px));
        background-color: white;

        svg {
            filter: drop-shadow(0 -15px 12px #000)
        }
    }
    .asso-content {
        background-color: white;
        padding-top: 10px;
    }
</style>