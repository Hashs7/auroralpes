<template>
  <n-link
    :to="link"
    @mouseenter.native="enter"
    class="link-translate"
    :class="{isLive}"
  >
    <div class="link-translate__container">
      <span ref="title" class="link-translate__title">{{ title }}</span>
      <span ref="titleHidden" class="link-translate__title--hidden">{{ title }}</span>
    </div>
    <span class="dot clearfix"></span>
  </n-link>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap';

export default {
  name: 'LinkTranslate',
  props: {
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isLive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isCurrentLink() {
      return this.$route.path === this.link;
    },
  },
  mounted() {
    TweenMax.set(this.$refs.titleHidden, { y: '-100%' });
  },
  methods: {
    getMouseSide(e) {
      const { left, top, height, width } = e.target.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      if (mouseY > height / 2) {
        return mouseX > width / 2 ? '-' : '';
      }
      return mouseX > width / 2 ? '' : '-';
    },
    getMouseDirection(e) {
      const { top, height } = e.target.getBoundingClientRect();
      const mouseY = e.clientY - top;
      return mouseY > height / 2 ? '' : '-';
    },
    getMouseOppositeDirection(e) {
      const { top, height } = e.target.getBoundingClientRect();
      const mouseY = e.clientY - top;
      return mouseY > height / 2 ? '-' : '';
    },
    enter(e) {
      if (this.isCurrentLink) return;
      const direction = this.getMouseDirection(e);
      const tl = new TimelineMax({ paused: true });
      tl.fromTo(this.$refs.title, 0.4, {
        y: 0,
        rotate: 0,
      }, {
        stagger: 0.03,
        rotate: `${this.getMouseSide(e)}7deg`,
        y: `${this.getMouseOppositeDirection(e)}121%`,
        ease: 'sin.out',
      }, 'end');
      tl.fromTo(this.$refs.titleHidden, 0.4, {
        y: `${direction}100%`,
        rotate: `${this.getMouseSide(e)}7deg`,
      }, {
        y: 0,
        rotate: 0,
        stagger: 0.03,
        ease: 'sin.out',
      }, 'end');
      tl.play();
    },
    leave(e) {
      if (this.isCurrentLink) return;
      const direction = this.getMouseDirection(e);
      const tl = new TimelineMax({ paused: true });
      tl.fromTo(this.$refs.title.querySelectorAll('.char'), 0.3, {
        y: `${this.getMouseOppositeDirection(e)}100%`,
      }, {
        stagger: 0.03,
        y: 0,
        ease: 'sin.out',
      }, 'end');
      tl.to(this.$refs.titleHidden.querySelectorAll('.char'), 0.3, {
        y: `${direction}100%`,
        stagger: 0.03,
        ease: 'sin.out',
      }, 'end');
      tl.play();
    },
  },
};
</script>

<style lang="scss" scoped>
.link-translate {
  position: relative;
  padding: 0 4px;
  display: inline-block;
}

.link-translate__title {
  display: block;
}

.link-translate__container {
  position: relative;
  overflow: hidden;
}

.link-translate .dot {
  display: none;
  width: 4px;
  height: 4px;
  background-color: $primary;
  position: absolute;
  top: 2px;
  right: -4px;
  border-radius: 50%;
  animation: pulse 2s infinite;
  transition: all .2s ease-in-out;
}

.link-translate.isLive {
  .dot {
    display: block;
  }
}

.link-translate__title--hidden {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(240,10,120,0.8);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(240,10,120,0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(240,10,120,0);
  }
}
</style>
