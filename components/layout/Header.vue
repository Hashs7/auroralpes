<template>
  <div class="header">
    <div class="o-container">
      <div class="header__content">
        <h1 class="header__title">{{ title }}</h1>
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
    },
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
    font-size: 0.73rem;
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
</style>