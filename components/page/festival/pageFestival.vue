<template>
  <main class="festival-page">
    <section class="o-section section--header">
      <Asset v-if="datas.fields.logo" :datas="datas.fields.logo" class="festival-page__logo" />
    </section>
    <FestivalHeader />
    <EntryContent
        :title="datas.fields.entryContent.fields.title"
        :description="datas.fields.entryContent.fields.description"
    />
  </main>
</template>

<script>
  import Asset from '@/components/common/Asset';
  import FestivalHeader from '@/components/page/festival/FestivalHeader';
  import EntryContent from '@/components/page/festival/FestivalEntryContent';

  export default {
    name: 'pageFestival',
    components: {
      Asset,
      FestivalHeader,
      EntryContent,
    },
    props: {
      datas: {
        required: true,
        type: Object,
      },
    },
    computed: {
      url() {
        return ''
      }
    },
    mounted() {
      document.querySelector('html').classList.add('page--festival')
    },
    beforeDestroy() {
      document.querySelector('html').classList.remove(' ')
    }
  }
</script>

<style lang="scss">
  .section--header {
    position: relative;
    height: 510px;
  }
  .festival-page {
    .section--header {
      background-size: cover;
      background-position: center;
      background-image: url('~@/assets/img/festival-illu/plan6.png');
    }
  }
  .festival-page__logo {
    position: absolute;
    bottom: -56px;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 315px;
    height: auto;

    .asset__asset {
      object-fit: contain;
    }
    .asset__underlay {
      background-color: transparent !important;
    }
  }
</style>