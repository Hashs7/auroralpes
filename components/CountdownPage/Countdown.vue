<template>
  <div class="timer">
    <div class="day">
      <span class="number">{{ daysCt }}{{ day }}</span>
    </div>
    <div class="hour">
      <span class="number">{{ hoursCt }}{{ hours }}</span>
    </div>
    <div class="min">
      <span class="number">{{ minutesCt }}{{ minutes }}</span>
    </div>
    <div class="sec">
      <span class="number">{{ secondsCt }}{{ seconds }}</span>
    </div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
  export default {
    name: "Countdown",
    props: ['endtime', 'day', 'hours', 'minutes', 'seconds', 'message', 'trans'],
    data: () => ({
      timer: "",
      start: "",
      end: "",
      interval: "",
      daysCt: 0,
      hoursCt: 0,
      minutesCt: 0,
      secondsCt: 0,
    }),
    created() {
      this.start = new Date().getTime();
      this.end   = new Date(this.endtime).getTime();
      this.timerCount(this.start, this.end);
      this.interval = setInterval(() => {
        this.timerCount(this.start, this.end);
      }, 1000);
    },
    methods: {
      timerCount (start, end) {
        const now      = new Date().getTime();
        const passTime = end - now;

        this.calcTime(passTime);
      },
      calcTime(dist) {
        this.daysCt    = Math.floor(dist / (1000 * 60 * 60 * 24));
        this.hoursCt   = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutesCt = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        this.secondsCt = Math.floor((dist % (1000 * 60)) / 1000);
      }
    }
  }
</script>

<style scoped>
  .timer {
    font-size: 20px;
    color: #FF2875;
    text-align: center;
    margin-top: 50px;
    font-weight: 200;
  }

  .day, .hour, .min, .sec {
    font-size: 115px;
    display: inline-block;
    font-weight: 500;
    text-align: center;
    width: 200px;
  }

  .min {
    width: 290px;
  }

  .number {
    display: inline-block;
    margin-right: 20px;
  }

  .message {
    font-size: 40px;
    font-weight: 100;
    margin-top: 5px;
  }
</style>
