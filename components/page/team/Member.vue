<template>
  <div
      class="member"
      :class="{'member--image': image}"
      data-scroll
      data-scroll-repeat
      :data-scroll-call="inView">
    <div class="member__img-container">
      <Asset v-if="image" :datas="image" class="member__img" />
      <div v-if="sn && !isMobile" class="member__socials">
        <Socials
            :fb="sn.fields.facebook"
            :insta="sn.fields.instagram"
            :twitter="sn.fields.twitter"
        />
      </div>
    </div>
    <div class="member__content">
      <h3 class="member__name">{{ name }}</h3>
      <div v-if="role.length" class="member__role">
        <Asset v-if="roleImage" :datas="roleImage" class="member-role-img" />
        <span class="member-role-name">{{ role }}</span>
      </div>
      <p v-if="citation.length" class="member__citation">{{ citation }}</p>
      <RichText v-if="description" :content="description" class="member__description" />
      <a v-if="mail.length" :href="'mailto:'+mail" class="member__mail">{{ mail }}</a>
      <a v-if="phone.length" :href="'tel:'+phone" class="member__phone">{{ phone }}</a>
      <div v-if="sn && isMobile" class="member__socials">
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
      roleImage: {
        type: Object,
        default: () => {},
      },
      mail: {
        type: String,
        default: '',
      },
      phone: {
        type: String,
        default: '',
      },
      sn: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      isMobile() {
        if (process.server) return true;
        return window.innerWidth < 769;
      }
    },
    methods: {
      inView() {
        // console.log('isInview');
      }
    },
  }
</script>

<style lang="scss">
  .member:not(:last-child) {
    margin-bottom: 100px;
  }

  .member__img {
    display: inline-block;
    width: 270px;
    height: 270px;
    margin-right: 45px;
  }

  .member__content {
    display: inline-block;
  }


  .member__phone {
    display: block;
    color: $secondary;
    transition: opacity .2s ease-in-out;
    @include hover {
      opacity: 0.7;
    }
  }

  .member__mail {
    @extend .member__phone;
  }
  .member__name {
    color: $primary;
    margin-bottom: 0;
  }

  .member__citation {
    margin-top: 5px;
    color: $black;
    font-size: 16px;
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
    margin: 0;
    font-size: 14px;
    color: $secondary;
  }

  .member-role-name {
    display: inline-block;
    vertical-align: middle;
  }
  .member-role-img {
    display: inline-block;
    vertical-align: middle;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    overflow: hidden;
  }

  .member__socials {
    margin-top: 8px;

    .logo path {
      fill: $primary;
      transition: opacity .2s ease-in-out;
    }
    .socials-link:hover path {
      fill: $primary;
      opacity: 0.5;
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

  @media screen and (max-width: 1500px) {
    .member {
      .member__name {
        color: $primary !important;
      }
      .member__socials .logo path {
        fill: $primary !important;
      }
      &:nth-child(2n) {
        .member__name {
          color: $secondary !important;
        }
        .member__socials .logo path {
          fill: $secondary !important;
        }
      }
    }
  }

  @media #{$tablet-m-media} {
    .member:not(:last-child) {
      margin-bottom: 50px;
    }

    .member__img-container {
      display: inherit;
    }
    .member__socials {
      margin-top: 5px;
    }
    .member__role {
      margin-top: 12px;
    }
    .member--image {
      flex-wrap: wrap;
      .member__content {
        width: 100%;
        margin-top: 16px;
      }
    }
  }

  @media #{$mobile-l-media} {
    .member__citation {
      margin-bottom: 0;
    }
    .member__description {
      margin-top: 0;
      p {
        margin: 8px 0;
      }
    }
    .member__img {
      width: 100%;
      margin-right: 0;
    }
  }
</style>