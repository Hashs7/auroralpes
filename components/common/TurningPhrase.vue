<template>
  <div v-enter:enterHeight.bottom.once="{enterHeight, callback: show}" :class="{'turningPhrase--active': active}" class="turningPhrase">
    <div v-split v-if="typeof datas === 'string'" class="phrase phrase--active">{{ datas }}</div>
    <rich-text
      v-else
      v-split
      :content="datas"
      class="phrase phrase--active"
    />
  </div>
</template>

<script>
import { TimelineMax, TweenMax, Power3, Power4, Expo } from 'gsap';
import RichText from './RichText';

export default {
  components: { RichText },
  props: {
    datas: {
      required: true,
    },
    split: {
      type: String,
      default: 'word',
    },
    enterHeight: {
      type: Number,
      default: 20,
    },
  },
  data: () => ({
    current: 0,
    active: false,
  }),
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        document.dispatchEvent(new Event('scroll'));
      });
    }
  },
  methods: {
    update() {
      this.current += 1;
      if (this.current === this.datas.length) {
        this.current = 0;
      }
      this.show(0.3);
    },
    hide() {
      if (!this.datas.length) return;
      const tween = new TimelineMax({ paused: true });
      tween.staggerTo(this.$el.querySelectorAll('.phrase')[this.current].querySelectorAll(`.${this.split}`), 0.9,
        { opacity: 0, y: -25, ease: Power3.easeOut },
        0.15);
      TweenMax.to(tween, tween.totalDuration(), {
        progress: 1,
        ease: Power4.easeOut,
        onComplete: () => this.update(),
      });
    },
    show(el, delay = 0.3) {
      this.active = true;
      this.$emit('show');
      const tween = new TimelineMax({ paused: true });
      tween.staggerFromTo(this.$el.querySelectorAll('.phrase')[this.current].querySelectorAll(`.${this.split}`), this.split === 'word' ? 1.8 : 1.2,
        { opacity: 0, y: this.split === 'word' ? 35 : 25 },
        { opacity: 1, y: 0, ease: Power3.easeOut },
        this.split === 'word' ? 0.15 : 0.1);
      TweenMax.to(tween, tween.duration(), { progress: 1, ease: Expo.easeOut, delay });
    },
  },
};
</script>

<style lang="scss">
  .turningPhrase{
    opacity: 0;

    &.turningPhrase--active{
      opacity: 1;
    }
  }
  .phrase{
    display: none;

    &.phrase--active{
      display: inline-block;
    }
  }
</style>
