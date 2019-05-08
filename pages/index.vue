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
         "expired":"Event has been expired.",
         "running":"Avant décollage",
         "upcoming":"Till start of event."
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
