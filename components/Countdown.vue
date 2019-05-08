<template>
  <div class="timer">
    <div class="day">
      <span class="number">{{ days + wordString.day }}</span>
    </div>
    <div class="hour">
      <span class="number">{{ hours + wordString.hours  }}</span>
    </div>
    <div class="min">
      <span class="number">{{ minutes + wordString.minutes }}</span>
    </div>
    <div class="sec">
      <span class="number">{{ seconds + wordString.seconds }}</span>
    </div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
  export default {
    name: "Countdown",
    props: ['endtime', 'trans'],
    data: () => ({
      timer: "",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      message: "",
    }),
    created: function () {
      this.wordString = JSON.parse(this.trans);
      this.start = new Date().getTime();
      this.end   = new Date(this.endtime).getTime();
      this.timerCount(this.start, this.end);
      this.interval = setInterval(() => {
        this.timerCount(this.start, this.end);
      }, 1000);
    },
    methods: {
      timerCount: function (start, end) {
        const now      = new Date().getTime();
        const passTime = end - now;

        this.calcTime(passTime);
        this.message = this.wordString.running;
      },
      calcTime: function (dist) {
        this.days    = Math.floor(dist / (1000 * 60 * 60 * 24));
        this.hours   = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
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
    font-weight: 100;
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
    font-weight: 200;
    margin-top: 5px;
  }
</style>
