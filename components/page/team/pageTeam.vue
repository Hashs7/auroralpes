<template>
  <main class="team-page">
    <Header
        :title="datas.fields.header.fields.title"
        :description="datas.fields.header.fields.description"
        :image="datas.fields.header.fields.image"
    />
    <section class="team-container o-section--white">
      <div class="o-container">
        <Member
          v-for="(member, i) in datas.fields.members"
          :key="i"
          :name="member.fields.name"
          :citation="member.fields.citation"
          :description="member.fields.description"
          :image="member.fields.image"
          :role="member.fields.role"
          :sn="member.fields.sn"
        />
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
  }
</script>

<style lang="scss" scoped>
.team-container {
  padding: 80px 0;

  .o-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .member {
    width: calc(50% - 30px);
  }
}
</style>