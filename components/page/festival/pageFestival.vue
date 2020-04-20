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
    <FestivalPlanning />
    <FestivalSpeakers />
  </main>
</template>

<script>
  import Asset from '@/components/common/Asset';
  import FestivalHeader from '@/components/page/festival/FestivalHeader';
  import EntryContent from '@/components/page/festival/FestivalEntryContent';
  import FestivalPlanning from '@/components/page/festival/FestivalPlanning';
  import FestivalSpeakers from '@/components/page/festival/FestivalSpeakers';

  export default {
    name: 'pageFestival',
    components: {
      Asset,
      FestivalHeader,
      EntryContent,
      FestivalPlanning,
      FestivalSpeakers,
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
      document.querySelector('html').classList.add('page--festival');
    },
    beforeDestroy() {
      document.querySelector('html').classList.remove('page--festival')
    }
  }
</script>

<style lang="scss">
  .section--header {
    position: relative;
    height: 100vh;
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
    top: 0;
    bottom: 0;
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