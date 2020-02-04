<template>
  <div class="member">
    <div class="member__img">
      <Asset :datas="image" />
    </div>
    <div class="member__content">
      <h2 class="member__name">{{ name }}</h2>
      <p v-if="citation.length" class="member__citation">{{ citation }}</p>
      <RichText v-if="description" :content="description" />
      <div v-if="role.length" class="member__role"></div>
      <div v-if="sn" class="member__socials"></div>
    </div>
  </div>
</template>

<script>
  import RichText from '~/components/common/RichText';
  import Asset from '~/components/common/Asset';

  export default {
    name: 'Member',
    components: {
      RichText,
      Asset,
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

<style scoped>

</style>