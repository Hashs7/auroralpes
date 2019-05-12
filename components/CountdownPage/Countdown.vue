<template>
    <div class="timer">
        <div class="day number">
            <span class="">{{ daysCt }}{{ day }}</span>
        </div>
        <div class="hour number">
            <span class="">{{ hoursCt }}{{ hours }}</span>
        </div>
        <div class="min number">
            <p>cccccc</p>
            <span class="">{{ minutesCt }}{{ minutes }}</span>
        </div>
        <div class="sec number">
            <span class="">{{ secondsCt }}{{ seconds }}</span>
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
            timerCount(start, end) {
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

<style scoped lang="scss">
    .timer {
        display: block;
        color: $primary;
        font-size: 20px;
        text-align: center;
    }

    .number {
        font-size: 115px;
        display: inline-block;
        font-weight: $weight-ultrathin;
        text-align: center;
        &:not(.sec) {
            margin-right: 25px;
        }
        @media #{$xl-down} {
            @include fluid-type(38px, 90px);
        }
        @media #{$md-down} {
            &:not(.sec) {
                margin-right: 15px;
            }
        }
        @media #{$sm-down} {
            &:not(.sec) {
                margin-right: 5px;
            }
        }
    }

    .min {
        width: 290px;
        @media #{$xl-down} {
            width: auto;
        }/*
        @media #{$md-down} {
            width: 150px;
        }
        @media #{$sm-down} {
            width: 105px;
        }*/
    }

    .sec {
        width: 190px;
        @media #{$xl-down} {
            width: auto;
            /*width: 150px;*/
        }/*
        @media #{$md-down} {
            width: 100px;
        }
        @media #{$sm-down} {
            width: 65px;
        }*/
    }

    .message {
        font-size: 40px;
        font-weight: $weight-thin;
        margin-top: 5px;
        @include fluid-type(18px, 40px);
    }
</style>
