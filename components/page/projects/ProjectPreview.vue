<template>
  <n-link :to="'/'+prefix+'/'+slug"  class="project" :class="{'project--image': thumbnail}">
    <div v-if="thumbnail" class="project__img">
      <Asset :datas="thumbnail" />
    </div>
    <div class="project__content">
      <h3 class="project__title">{{ title }}</h3>
      <p v-if="date" class="project__date">{{ formatDate }}</p>
      <p v-if="resume.length" class="project__resume">{{ resume }}</p>
    </div>
  </n-link>
</template>

<script>
  import RichText from '~/components/common/RichText';
  import Asset from '~/components/common/Asset';
  import Socials from '~/components/common/Socials';
  import { formatedDate } from '../../../utils/helpers';

  export default {
    name: 'Project',
    components: {
      RichText,
      Asset,
      Socials,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        default: '',
      },
      resume: {
        type: String,
        default: '',
      },
      slug: {
        type: String,
        default: '',
      },
      prefix: {
        type: String,
        default: '',
      },
      thumbnail: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      formatDate() {
        return formatedDate(this.date);
      },
    },
    mounted() {
      console.log('prefix', this.prefix);
    }
  }
</script>

<style lang="scss">
  .project {
    display: flex;
    margin-bottom: 70px;
    color: $black;
    margin-left: calc(50% + 45px);

    .project__title {
      color: $primary;
      margin-bottom: 0;
    }
    &:nth-child(2n) {
      .project__title {
        color: $secondary;
      }
    }
  }

  .project__img {
    display: inline-block;
    max-width: 590px;
    width: 50%;
    height: 270px;
    margin-right: 45px;
  }

  .project__content {
    display: inline-block;
    width: 100%;
  }

  .project__date {
    margin-top: 5px;
    color: $black;
    font-size: 14px;
    font-weight: $weight-light;
  }

  .project__resume {
    margin-top: 24px;
    font-size: 1rem;
  }

    /*--- Alt ---*/
  .project--image {
    display: flex;
    margin-left: 0;

    .project__content {
      width: calc(50% - 45px);
    }
  }
  .project:nth-child(2n) {
    .project__name {
      color: $secondary;
    }
  }

  @media #{$tablet-m-media} {
    .project {
      flex-wrap: wrap;
      margin-left: 0;
    }
    .project__img {
      max-width: none;
      width: 100%;
      margin-right: 0;
    }
    .project__content {
      width: 100% !important;
      margin-top: 16px;
      max-width: 600px;
    }
    .project__resume {
      margin-top: 12px;
    }
    .project__date {
      margin-top: 0;
    }
  }

  @media #{$mobile-l-media} {
    .project {
      margin-bottom: 40px;
    }
    .project__img {
      height: 160px;
    }
  }
</style>