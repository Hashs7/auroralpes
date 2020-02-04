<template>
  <main class="team-page">
    <Header
        :title="datas.fields.header.fields.title"
        :description="datas.fields.header.fields.description"
        :image="datas.fields.header.fields.image"
    />
    <section class="team-container o-section--white">
      <div class="o-container">
        <!--<Member
            v-for="datas.fields.members"
        />-->
      </div>
    </section>
  </main>
</template>

<script>
  import Header from '~/components/layout/Header';
  import Member from '~/components/page/team/Member';

  export default {
    name: 'pageTeam',
    components: {
      Header,
      Member,
    },
    props: {
      datas: {
        required: true,
        type: Object,
      },
    },
    mounted() {
      console.log(this.datas.fields.header);
    }
  }
</script>

<style scoped>
.team-container {
  padding: 80px 0;
}
</style>