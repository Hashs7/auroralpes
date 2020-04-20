<template>
  <div class="festival-header">
    <img
        class="illu-plan plan--bg"
        src="~@/assets/img/festival-illu/plan5.png"
        ref="plan5"
        alt=""
    >
    <div >
      <img
        class="illu-plan plan--parallax plan4"
        src="~@/assets/img/festival-illu/plan4.png"
        ref="plan4"
        alt=""
        data-scroll data-scroll-speed="1"
      >
    </div>
    <div >
      <img
          class="illu-plan plan--parallax plan3"
          src="~@/assets/img/festival-illu/plan3.png"
          ref="plan3"
          alt=""
          data-scroll data-scroll-speed="1.5"
      >
    </div>
    <div >
      <img
          class="illu-plan plan--parallax plan2"
          src="~@/assets/img/festival-illu/plan2.png"
          ref="plan2"
          data-scroll data-scroll-speed="2"
          alt=""
      >
    </div>
    <div >
      <img
          class="illu-plan plan--parallax plan1"
          src="~@/assets/img/festival-illu/plan1.png"
          ref="plan1"
          data-scroll data-scroll-speed="2.2"
          alt=""
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FestivalHeader',
  }
</script>

<style lang="scss" scoped>
  .festival-header {
    position: relative;
    overflow: hidden;
    /*padding-bottom: 300px;*/
  }
  .illu-plan {
    width: 100%;
    min-width: 1400px;
  }
  .plan--bg {
    height: 100vw;
    width: auto;
  }
  .plan--parallax {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
  .plan1 {
    // bottom: -200px;
    /*top: 620px;*/
    top: 820px;
  }
  .plan2 {
    /*top: 275px*/
    top: 475px;
  }
  .plan3 {
    /*top: 40px;*/
    /*top: 170px;*/
    top: 370px;
  }
  .plan4 {
    /*top: 180px;*/
    top: 280px;
  }
  @media screen and (max-width: 1570px) {
    .plan1 {
      /*bottom: 0;*/
    }
  }
  @media #{$xll-down} {
    .plan--parallax {
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>