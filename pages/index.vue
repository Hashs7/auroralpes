<template>
  <section class="container">
    <div>
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
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Countdown from '~/components/Countdown.vue'

export default {
  components: {
    Logo,
    Countdown
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

</style>
