<template>
  <section class="container">
    <div class="aurore">
      <Aurore/>
    </div>
    <div class="character">
      <Character/>
    </div>
    <div class="ground">
      <Ground/>
    </div>

    <LogoContainer
      :logoAuro="logoAuroralpes"
      :logoMondes="logoMondes"/>

    <Countdown
      :endtime="date"
      day="j"
      hours="h"
      minutes="mn"
      seconds="s"
      :message="baseline"
    />

    <SocialContainer
      :fb="facebook.url"
      :insta="instagram.url"
      :twitter="twitter.url"/>
  </section>
</template>

<script>
  import Aurore from '~/assets/icons/aurore.svg'
  import Character from '~/assets/icons/character.svg'
  import Ground from '~/assets/icons/ground.svg'
  import Countdown from '~/components/CountdownPage/Countdown'
  import SocialContainer from '~/components/CountdownPage/SocialContainer'
  import LogoContainer from '~/components/CountdownPage/LogoContainer'
  import Counter from '~/components/Counter'

  export default {
    components: {
      Aurore,
      Character,
      Ground,
      Countdown,
      SocialContainer,
      LogoContainer,
      Counter
    },
    layout: 'countdown',
    data() {
      return {story: {content: {}}}
    },
    async asyncData(context) {
      const version = context.query._storyblok || context.isDev ? 'draft' : 'published';

      try {
        const resCountdown = await context.app.$storyapi.get('cdn/stories/countdown', {version});
        const resSocial    = await context.app.$storyapi.get('cdn/stories/socials');

        const {baseline, date, logoAuroralpes, logoMondes} = resCountdown.data.story.content;
        const {facebook, twitter, instagram}               = resSocial.data.story.content;

        return { baseline, date, logoAuroralpes, logoMondes, facebook, twitter, instagram }
      } catch(res) {
        context.error({statusCode: res.response.status, message: res.response.data})
      }
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .aurore {
    position: absolute;
    top: -110px;
    left: -145px;
    width: 1220px;
    height: 840px;
  }

  .character {
    z-index: 1;
    position: absolute;
    bottom: -52px;
    right: 63px;
    width: 442px;
    height: 460px;
  }

  .ground {
    position: absolute;
    bottom: 4px;
    right: -86px;
    width: 712px;
    height: 235px;
  }

</style>
