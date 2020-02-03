<template>
  <a :href="'mailto:'+email" class="mail">
    <span class="mail__label">{{ label }}</span>
    <span class="mail__icon">
      <MailIcon />
    </span>
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
    justify-content: space-between;
    width: 330px;
    font-size: 1.3rem;
    color: $black;
    font-weight: $weight-medium;
  }
  .mail__icon {
    display: inline-flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 0, 104, .25);

    svg {
      width: 40px;
      margin: auto;
    }
  }
</style>