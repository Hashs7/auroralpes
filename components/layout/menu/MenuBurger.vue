<template>
  <div
      class="burger-headroom"
  >
    <div class="headroom">
      <button :class="{ open: menuOpen }" @click="toggleMenu" class="navigation__menu"
              aria-label="menu de navigation">
        <div class="navigation__menu-container">
          <span/>
          <span/>
          <span/>
        </div>
      </button>
    </div>

  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'BurgerMenu',
    components: {
    },
    data: () => ({
      active: false,
      isPinned: true,
    }),
    computed: {
      menuOpen() {
        return this.$store.state.menuOpen;
      },
    },
    methods: {
      ...mapMutations([
        'toggleMenu',
      ]),
    },
  };
</script>

<style lang="scss">
  .burger-headroom {
    display: none;
    height: 0;
  }
  .burger-headroom .headroom {
    position: fixed;
    top: auto;
    left: auto;
    bottom: 25px;
    right: 35px;
    z-index: 19999;
    transition: transform .4s ease-out;

    @media #{$mobile-l-media} {
      right: 20px;
      bottom: 15px;
    }
  }

  .burger-headroom .headroom--unpinned {
    transform: translateX(85px);
  }

  .burger-headroom .headroom--bottom {
    transform: none;

    .navigation__menu {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .burger-headroom {
    .navigation__menu-container {
      margin: auto;
    }

    .navigation__menu {
      display: flex;
      cursor: pointer;
      mix-blend-mode: difference;
      background-color: $white;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: none;
      box-shadow: 0px 0px 9px -4px $gray-darker;

      span {
        display: block;
        width: 19px;
        height: 2px;
        margin: 6px 0;
        transform-origin: center;
        background-color: $primary;
        transition: all .2s ease;
      }

      span:first-child {
        margin-top: 0;
        width: 26px;
      }

      span:last-child {
        margin-bottom: 0;
        width: 24px;
      }
    }

    .navigation__menu.open {
      span:first-child {
        transform: rotate(45deg) translate(5px, 6px);
      }

      span:nth-child(2) {
        opacity: 0;
        transform: translateX(-4px);
      }

      span:last-child {
        width: 26px;
        transform: rotate(-45deg) translate(5px, -6px);
      }
    }
  }

  @media #{$desktop-s-media} {
    .burger-headroom {
      display: block;
    }
  }
</style>
