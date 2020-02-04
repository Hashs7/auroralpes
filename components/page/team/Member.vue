<template>
  <div class="member" :class="{'member--image': image}">
    <div v-if="image" class="member__img">
      <Asset :datas="image" />
    </div>
    <div class="member__content">
      <h3 class="member__name">{{ name }}</h3>
      <p v-if="citation.length" class="member__citation">{{ citation }}</p>
      <RichText v-if="description" :content="description" class="member__description" />
      <div v-if="role.length" class="member__role">
        <span class="member-role-name">{{ role }}</span>
      </div>
      <div v-if="sn" class="member__socials">
        <Socials
            :fb="sn.fields.facebook"
            :insta="sn.fields.instagram"
            :twitter="sn.fields.twitter"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import RichText from '~/components/common/RichText';
  import Asset from '~/components/common/Asset';
  import Socials from '~/components/common/Socials';

  export default {
    name: 'Member',
    components: {
      RichText,
      Asset,
      Socials,
    },
    props: {
      name: {
        type: String,
        required: true,
      },
      citation: {
        type: String,
        default: '',
      },
      description: {
        type: Object,
        default: () => {},
      },
      image: {
        type: Object,
        default: () => {},
      },
      role: {
        type: String,
        default: '',
      },
      sn: {
        type: Object,
        default: () => {},
      },
    },
  }
</script>

<style lang="scss">
  .member {
    margin-bottom: 100px;
  }

  .member__img {
    display: inline-block;
    max-width: 270px;
    max-height: 270px;
    width: 100%;
    height: 100%;
    margin-right: 45px;
  }

  .member__content {
    display: inline-block;
  }

  .member__name {
    color: $primary;
    margin-bottom: 0;
  }

  .member__citation {
    margin-top: 5px;
    color: $black;
    font-size: 14px;
    font-weight: $weight-light;

    &:before {
      content: '“ '
    }
    &:after {
      content: ' ”'
    }
  }

  .member__description {
    margin-top: 5px;
    font-size: 1rem;
  }

  .member__role {
    margin-top: 20px;
    font-size: 11px;
  }

  .member__socials {
    margin-top: 20px;

    .logo path {
      fill: $primary;
    }
  }


    /*--- Alt ---*/
  .member--image {
    display: flex;

    .member__content {
      width: calc(100% - 315px);
    }
  }
  .member {
    &:nth-child(4n - 1),
    &:nth-child(4n - 2) {
      .member__name {
        color: $secondary;
      }
      .member__socials .logo path {
        fill: $secondary;
      }
    }
  }
</style>