<template>
    <div class="logo-container">
        <div>
            <img :src="auroUrl" :alt="logoAuro.title" class="logo-auroralpes">
            <span class="logo-auro__txt">Des étoiles dans les yeux</span>
        </div>
        <span class="cross">
          <Cross/>
        </span>
        <div>
            <img :src="mondesUrl" :alt="logoMondes.title" class="logo-mondes">
        </div>
    </div>
</template>

<script>
    import Cross from '~/assets/icons/cross.svg'

    export default {
        name: "LogoContainer",
        props: ['logoAuro', 'logoMondes'],
        components: {Cross},
        computed: {
            auroUrl: function () {
                return 'https:' + this.logoAuro.file.url
            },
            mondesUrl: function () {
                return 'https:' + this.logoMondes.file.url
            },
        }
    }
</script>

<style scoped lang="scss">
    .logo-container {
        position: absolute;
        top: 130px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 600px;
        min-width: 275px;
        /*width: 10vw;*/
        margin: auto;
        @media #{$xl-down-height} {
            top: 80px;
        }
        @media #{$lg-down-height} {
            top: 60px;
        }
        @media #{$lg-down} {
            max-width: 500px;
        }
        @media #{$md-down} {
            top: 130px;
            max-width: 350px;
        }
        @media #{$sm-down} {
            max-width: 275px;
        }
        @media #{$sm-down-height} {
            top: 65px;
        }
        @media #{$xs-down-height} {
            top: 30px;
        }
    }

    .logo-auroralpes {
        width: 210px;
        height: auto;
        @media #{$lg-down} {
            width: 180px;
        }
        @media #{$md-down} {
            width: 150px;
        }
        @media #{$sm-down} {
            width: 110px;
        }
    }

    .logo-auro__txt {
        display: block;
        font-weight: bold;
        color: $secondary;
    }

    .cross {
        width: 28px;
        height: 28px;
        @media #{$lg-down} {
            width: 20px;
            height: 20px;
        }
        @media #{$md-down} {
            width: 13px;
            height: 13px;
        }
    }

    .logo-mondes {
        width: 190px;
        @media #{$lg-down} {
            width: 160px;
        }
        @media #{$md-down} {
            width: 120px;
        }
        @media #{$sm-down} {
            width: 95px;
        }
    }
</style>
