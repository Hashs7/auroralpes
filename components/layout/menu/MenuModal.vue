<template>
  <transition name="modal">
    <div v-show="menuOpen" :class="{open: menuOpen}" class="modal-container">
      <ul class="modal__links">
        <li class="modal__link">
          <n-link to="/" class="modal__item" @click.native="toggleMenu">
            Accueil
          </n-link>
        </li>
        <li v-for="(page, i) in pages" :key="i" class="modal__link">
          <n-link :to="'/'+page.fields.slug" class="modal__item" @click.native="toggleMenu">
            {{ page.fields.title }}
          </n-link>
        </li>
        <li class="modal__link">
          <n-link to="/live" class="modal__item" @click.native="toggleMenu">
            Live
          </n-link>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import gsap from 'gsap';
import { mapMutations } from 'vuex';

export default {
  name: 'MenuModal',
  data() {
    return {
      tl: null,
      shouldUpdateTl: false,
    }
  },
  computed: {
    sections() {
      // return this.$store.state.global.settings[this.locale].fields.homepage.fields.sections;
    },
    menuOpen() {
      return this.$store.state.menuOpen;
    },
    settings() {
      return this.$store.state.global.settings;
    },
    pages() {
      return this.settings.fields.pages;
    },
    isDesktop() {
      return this.width > 1180;
    },
  },
  watch: {
    menuOpen(val) {
      if (val) {
        this.tl.resume();
        this.tl.play();
        return;
      }
      this.tl.reverse();
    },
  },
  mounted() {
    this.createTl();
  },
  updated() {
    if (!this.shouldUpdateTl) return;
    this.shouldUpdateTl = false;
    this.createTl()
  },
  methods: {
    ...mapMutations([
      'toggleMenu',
    ]),
    createTl() {
      this.tl = gsap.timeline({ paused: true });
      this.tl.fromTo('.modal__item', {
        rotate: 7,
        y: 70,
      }, {
        rotate: 0,
        y: 0,
        duration: .4,
        stagger: .1,
        delay: .2,
        force3D: true,
      })
    },
  },
};
</script>

<style lang="scss" scoped>
  .modal-container {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    z-index: 500;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 44px 30px;
    background: linear-gradient(220deg, #404553, #0D0026 90%);
    transition: opacity .2s ease;
    transition-delay: .5s;

    &.open {
      transition-delay: 0s;
    }
  }

  .menuOpen .modal-container {
    /*transition-delay: .5s;*/
  }

  .modal__link {
    display: block;
    overflow: hidden;

    &:not(:last-child) {
      margin-bottom: 16px;
     }
  }

  .modal__item {
    position: relative;
    z-index: 1000000;
    display: inline-block;
    color: $white;
    padding: 16px;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    font-weight: 500;
    transform-origin: left bottom;

    &.nuxt-link-exact-active {
      opacity: .4;
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }
  @media #{$desktop-s-media} {
    .modal-container {
      display: flex;
    }
  }
  @media #{$mobile-s-media} {
    .modal__link:not(:last-child) {
      margin-bottom: 16px;
    }
    .modal__item {
      font-size: 1.6rem;
    }
  }
</style>
