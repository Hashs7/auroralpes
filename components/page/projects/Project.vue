<template>
  <div class="project">
    <Header
      :title="datas.fields.title"
      :date="datas.fields.date"
      :image="datas.fields.image"
      project
    />
  </div>
</template>

<script>
  import Header from '~/components/layout/Header';

  export default {
    name: 'Project',
    components: {
      Header,
    },
    props: {
      datas: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped>

</style>