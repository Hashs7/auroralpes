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
      :logoAuro="logoAuroralpes.fields"
      :logoMondes="logoMondes.fields"/>

    <Countdown
      :endtime="date"
      day="j"
      hours="h"
      minutes="mn"
      seconds="s"
      :message="baseline"
    />

    <SocialContainer
      :fb="facebook"
      :insta="instagram"
      :twitter="twitter"/>
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
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient();

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
    async asyncData({env}) {
      const resSocial = await client.getEntries({
        content_type: 'socials'
      });
      const resCount = await client.getEntries({
        content_type: 'countdown'
      });

      const {date, baseline, logoAuroralpes, logoMondes} = resCount.items[0].fields;
      const {facebook, twitter, instagram}               = resSocial.items[0].fields;

      return {date, baseline, logoAuroralpes, logoMondes, facebook, twitter, instagram};
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
