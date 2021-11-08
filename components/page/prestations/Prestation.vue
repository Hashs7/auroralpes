<template>
  <div class="project-page">
    <Header
      :title="datas.fields.title"
      :date="datas.fields.date"
      :dateLabel="datas.fields.dateLabel"
      :image="datas.fields.thumbnail"
      project
    />
    <section class="project-container o-section--white">
      <div class="o-container">
        <RichText :content="datas.fields.description" />
      </div>
    </section>
    <section v-if="datas.fields.images" class="o-section--white">
      <div class="o-container">
        <div class="project-gallery">
          <Asset v-for="(img, i) in datas.fields.images" :key="i" :datas="img" class="project-gallery__item"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from '~/components/layout/Header';
  import RichText from '~/components/common/RichText';
  import Asset from '~/components/common/Asset';

  export default {
    name: 'Prestation',
    components: {
      Header,
      RichText,
      Asset,
    },
    props: {
      datas: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss">
.project-container {
  padding: 40px 0;

  h2, h3, h4, h5, h6 {
    color: #535353;
  }
}

.project-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 340px 400px auto;
  grid-column-gap: 32px;
  grid-row-gap: 24px;
}

.project-gallery__item {
  position: relative;
  width: 100%;
  border: 1px solid #ccc;

  &:nth-child(4n - 3) {
    grid-column: 1 / 4;
  }
  &:nth-child(4n - 2) {
    grid-column: 4 / 7;
    justify-self: center;
  }
  &:nth-child(4n - 1) {
    grid-column: 1 / 3;
  }
  &:nth-child(4n) {
    grid-column: 3 / 7;
  }
}
</style>