<template>
  <a :href="'mailto:'+email" class="mail">
    <span class="mail__icon">
      <MailIcon />
    </span>
    <span class="mail__label">{{ label }}</span>
  </a>
</template>

<script>
  import MailIcon from '~/assets/icons/footer/ic_mail.svg';

  export default {
    name: 'Mail',
    components: {
      MailIcon,
    },
    props: {
      email: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>
  .mail {
    display: flex;
    align-items: center;
    width: 330px;
    font-size: 1.3rem;
    color: $black;
    font-weight: $weight-medium;
  }
  .mail__label {
    padding-left: 25px;
  }
  .mail__icon {
    display: inline-flex;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 0, 104, .25);

    svg {
      width: 30px;
      margin: auto;
    }
  }
  @media #{$mobile-l-media} {
    .mail {
      width: auto;
      font-size: 1rem;
    }
    .mail__icon {
      width: 50px;
      height: 50px;

      svg {
        width: 26px;
        margin: auto;
      }
    }
  }
</style>