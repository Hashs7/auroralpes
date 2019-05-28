<template>
    <section class="asso-section">
        <span class="wave wave-up">
            <WaveUp />
        </span>

        <div class="asso-content">
            <div id="asteroid">
                <div class="asteroid"></div>
            </div>
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
                    <a :href="link" class="btn-support">
                        <RippleButton name="Nous rejoindre"/>
                    </a>
                </div>
                <div class="logo-auro">
                    <AurorAlpes />
                </div>
            </div>
        </div>

        <span class="wave wave-down">
            <WaveDown />
        </span>
    </section>
</template>

<script>
    import AurorAlpes from '~/assets/icons/auroralpes-logo-blue.svg'
    import WaveUp from '~/assets/icons/wave-up.svg'
    import WaveDown from '~/assets/icons/wave-down.svg'
    import Asteroid from '@/components/Scene/Asteroid';
    import RippleButton from '@/components/UI/RippleButton';

    export default {
        name: "AssoSection",
        props: ['assoDesc', 'link'],
        components: { WaveUp, WaveDown, AurorAlpes, RippleButton },
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
        @media #{$md-down} {
            @include fluid-type(16px, 20px);
        }
    }
    .asso-content {
        position: relative;
        z-index: 10;
        text-align: right;
        background-color: white;
        padding-top: 10px;
        @media #{$md-down} {
            text-align: left;
            padding: 80px 0 100px 0;
        }
    }
    .asso-description {
        width: calc(100% - 280px);
        margin: 0 0 0 auto;
        @media #{$md-down} {
            width: 100%;
        }
    }
    .asso-support {
        @media #{$md-down} {
            text-align: center;
        }
    }
    .o-container {
        position: relative;
    }
    .logo-auro {
        max-width: 320px;
        min-width: 120px;
        width: 20vw;
        position: absolute;
        bottom: 70px;
        left: 0;
        transform: rotate(-10deg);

        @media #{$md-down} {
            bottom: -110px;
            left: auto;
            right: 30px;
            transform: translateY(100%), rotate(-10deg);
        }
    }
    #asteroid {
        position: absolute;
        z-index: -1;
        top: -280px;
    }
    .wave svg {
        display: block;
        vertical-align: bottom;
    }
    .btn-support {
        position: relative;
        top: 40px;
        z-index: 50;
        @media #{$md-down} {
           top: 0;
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
</style>