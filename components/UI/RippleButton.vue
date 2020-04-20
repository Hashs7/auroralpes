<template>
  <div class="btn-container">
    <button ref="rippleBtn"
            class="btn btn-ripple btn--tamaya"
            :class="{btnBgDark: bgDark}"
            :data-text="name"
            data-hover="none"
            @mouseenter="rippleIn" @mouseleave="rippleOut">
      <span class="name">{{name}}</span>
      <svg class="ripple-obj">
        <use width="100"
             height="100"
             xlink:href="#ripply-scott"
             ref="rippleObj"
             class="js-ripple"></use>
      </svg>
    </button>

    <div class="invisible" aria-hidden="true">
      <svg width="0" height="0" focusable="false">
        <symbol id="ripply-scott" viewBox="0 0 100 100">
          <circle cx="1" cy="1" r="1" style="fill: #FF0068;"/>
        </symbol>
      </svg>
    </div>
  </div>
</template>

<script>
  import gsap from 'gsap';

  export default {
    props: ['name', 'bgDark'],
    methods: {
      rippleIn(event, timing = .5) {
        const x = event.offsetX,
          y = event.offsetY,
          w = event.target.offsetWidth,
          h = event.target.offsetHeight,
          offsetX = Math.abs((w / 2) - x),
          offsetY = Math.abs((h / 2) - y),
          deltaX = (w / 2) + offsetX,
          deltaY = (h / 2) + offsetY,
          scale_ratio = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

        gsap.fromTo(this.$refs.rippleObj, {
          x: x,
          y: y,
          transformOrigin: '50% 50%',
          scale: 0,
          opacity: 1,
          ease: "none"
        }, {
          x: x,
          y: y,
          scale: scale_ratio,
          opacity: 1,
          duration: timing
        });

      },
      rippleOut(event, timing = .4) {
        gsap.killTweensOf(this.$refs.rippleObj)
        gsap.to(this.$refs.rippleObj, {
          x: event.offsetX,
          y: event.offsetY,
          scale: 0,
          opacity: 1,
          ease: "power2.out",
          duration: timing,
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .btn-container {
    display: inline-block;
    border-radius: 60px;
  }
  .btn-ripple {
    position: relative;
    background-color: white;
    overflow: hidden;
  }

  .btn:focus {
    outline: none;
  }

  .name {
    position: relative;
    z-index: 20;
    /*mix-blend-mode: ;*/
  }
  .invisible {
    height: 0;
    width: 0;
    position: absolute;
    visibility: hidden;
    pointer-events: none;
  }

  .ripple-obj {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    fill: #0c7cd5;
    pointer-events: none;
  }

  .ripple-obj use {
    opacity: 0.5;
  }

  .btn--tamaya {
    overflow: hidden;
    color: $primary;
    /*mix-blend-mode: exclusion;*/
    min-width: 180px;
  }

  .btn--tamaya::before,
  .btn--tamaya::after {
    z-index: 20;
    content: attr(data-text);
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0;
    background: none;
    color: $primary;
    /*mix-blend-mode: exclusion;*/
    overflow: hidden;
    transition: transform 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  .btn--tamaya::before {
    top: 0;
    pointer-events: none;
    /*padding-top: 1em;*/
  }

  .btn--tamaya::after {
    bottom: 0;
    line-height: 0;
    pointer-events: none;
  }

  .btn--tamaya .name {
    display: block;
    transform: scale3d(0.2, 0.2, 1);
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  .btn--tamaya {
    @include hover {
      &:before {
        transform: translate3d(0, -100%, 0);
      }
      &:after {
        transform: translate3d(0, 100%, 0);
      }
      .name {
        color: white;
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
  }


  @media #{$tablet-l-media} {
    .btn--tamaya {
      &:before, &:after {
        display: none;
      }
      .name {
        color: $primary !important;
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
    .ripple-obj {
      display: none;
    }
  }
</style>
