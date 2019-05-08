<template>
  <section class="container">
      <div class="aurore">
        <Aurore />
      </div>
      <div class="character">
        <Character />
      </div>
      <div class="ground">
        <Ground />
      </div>
      <LogoContainer />
      <Countdown
        endtime="Jun 6, 2019 20:00:00"
        trans='{
         "day":"j",
         "hours":"h",
         "minutes":"mn",
         "seconds":"s",
         "running":"Avant décollage"
       }'
      />
      <SocialContainer />
  </section>
</template>

<script>
import Aurore from '~/assets/icons/aurore.svg'
import Character from '~/assets/icons/character.svg'
import Ground from '~/assets/icons/ground.svg'
import Countdown from '~/components/CountdownPage/Countdown'
import SocialContainer from '~/components/CountdownPage/SocialContainer'
import LogoContainer from '~/components/CountdownPage/LogoContainer'

export default {
  components: {
    Aurore,
    Character,
    Ground,
    Countdown,
    SocialContainer,
    LogoContainer
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
    right:  63px;
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
