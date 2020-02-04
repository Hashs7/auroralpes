<template>
  <n-link :to="prefix+'/'+slug">
    <div class="project" :class="{'project--image': image}">
      <div v-if="image" class="project__img">
        <Asset :datas="image" />
      </div>
      <div class="project__content">
        <h3 class="project__title">{{ title }}</h3>
        <p v-if="date" class="project__date">{{ formatDate }}</p>
        <p v-if="resume.length" class="project__resume">{{ resume }}</p>
      </div>
    </div>
  </n-link>
</template>

<script>
  import RichText from '~/components/common/RichText';
  import Asset from '~/components/common/Asset';
  import Socials from '~/components/common/Socials';
  import { formatedDate } from "../../../utils/helpers";

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
      image: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      formatDate() {
        return formatedDate(this.date);
      },
    }
  }
</script>

<style lang="scss">
  .project {
    margin-bottom: 70px;
  }

  .project__img {
    display: inline-block;
    max-width: 590px;
    max-height: 270px;
    width: 100%;
    height: 100%;
    margin-right: 45px;
  }

  .project__content {
    display: inline-block;
  }

  .project__title {
    color: $primary;
    margin-bottom: 0;
  }

  .project__date {
    margin-top: 5px;
    color: $black;
    font-size: 14px;
    font-weight: $weight-light;
  }

  .project__resume {
    margin-top: 5px;
    font-size: 1rem;
  }

    /*--- Alt ---*/
  .project--image {
    display: flex;

    .project__content {
      width: calc(100% - 590px);
    }
  }
  .project:nth-child(2n) {
    .project__name {
      color: $secondary;
    }
  }
</style>