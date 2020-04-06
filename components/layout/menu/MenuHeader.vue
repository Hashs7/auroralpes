<template>
  <header class="header">
    <div class="o-container">
      <n-link to="/">
        <Logo />
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
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding-top: 40px;

    .o-container {
      display: flex;
      justify-content: space-between;
    }
    .socials {
      margin-left: 120px;
    }
  }
  .header__right {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 520px) {
    .header {
      padding-top: 20px;
      .socials {
        margin-left: 0;
        .socials-link {
          display: block;
        }
      }
    }
  }
</style>