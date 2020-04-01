<template>
  <div :class="{'header--project': project}" class="header">
    <div class="o-container">
      <div class="header__content">
        <h1 class="header__title">{{ title }}</h1>
        <p v-if="date.length">{{ formatDate }}</p>
        <RichText v-if="description" :content="description" />
      </div>
    </div>
    <div class="header__img" v-if="image">
      <Asset :datas="image" />
    </div>
  </div>
</template>

<script>
  import RichText from '~/components/common/RichText';
  import Asset from '~/components/common/Asset';
  import { formatedDate } from "../../utils/helpers";

  export default {
    name: 'Header',
    components: {
      RichText,
      Asset,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: Object,
        default: () => {},
      },
      image: {
        type: Object,
        default: () => {},
      },
      date: {
        type: String,
        default: '',
      },
      project: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      formatDate() {
        return formatedDate(this.date);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    display: flex;
    align-items: center;
    height: 500px;
  }
  .header__content {
    position: relative;
    z-index: 10;
    max-width: 530px;
    margin: 0 0 0 auto;
    text-align: right;
    color: $white;
    font-size: 16px;
    line-height: 1.5;
  }
  .header__title {
    margin-bottom: 30px;
    font-size: 3.4rem;
  }
  .header__img {
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    &:after {
      content: '';
      display: block;
      z-index: 2;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .35);
    }
  }

  .header--project {
    .header__content {
      max-width: none;
      text-align: center;
    }
  }
   @media #{$tablet-m-media} {
     .header__content {
      text-align: left;
       margin: 0 auto 0 0;
     }
     .header__title {
       margin-bottom: 22px;
       font-size: 3rem;
     }
   }
  @media #{$mobile-l-media} {
    .header__content {
      text-align: left;
      margin: 0 auto 0 0;
    }
    .header__title {
      margin-bottom: 16px;
      font-size: 2.5rem;
    }
  }
</style>