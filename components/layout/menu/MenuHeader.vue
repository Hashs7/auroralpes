<template>
  <header class="l-header">
    <div class="o-container">
      <n-link to="/">
        <Logo class="logo"/>
      </n-link>

      <div class="header__right">
        <MenuNavigation/>
        <Socials
            class="socials"
            :fb="sn.fields.facebook"
            :insta="sn.fields.instagram"
            :twitter="sn.fields.twitter"
        />
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from '@/assets/icons/logo.svg';
  import Socials from '@/components/common/Socials.vue';
  import MenuNavigation from './MenuNavigation';

  export default {
    name: 'MenuHeader',
    components: {
      MenuNavigation,
      Logo,
      Socials,
    },
    computed: {
      sn() {
        return this.$store.state.global.footer.fields.sn;
      }
    },
  }
</script>

<style lang="scss">
  .l-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding-top: 40px;

    .o-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .socials {
      margin-left: 120px;
    }
    .logo {
      vertical-align: bottom;
    }
  }
  .header__right {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 520px) {
    .l-header {
      padding-top: 20px;

      .o-container {
        align-items: flex-start;
      }

      .socials {
        margin-left: 0;
        .socials-link {
          display: block;
        }
      }
    }
  }
</style>