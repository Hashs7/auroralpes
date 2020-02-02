<template>
  <footer class="footer">
    <div class="footer__up o-section--white">
      <div class="o-container">
        <div class="footer__contact">
          <h2>Nous contacter</h2>
          <ul>
            <li v-if="footer.fields.contactVolunteer" class="footer__mail">
              <Mail :email="footer.fields.contactVolunteer" label="Devenir bénévole" />
            </li>
            <li v-if="footer.fields.contactPartner" class="footer__mail">
              <Mail :email="footer.fields.contactPartner" label="Devenir partenaire" />
            </li>
            <li v-if="footer.fields.contactQuestion" class="footer__mail">
              <Mail :email="footer.fields.contactQuestion" label="Une question ?" />
            </li>
          </ul>
          <a :href="'tel:'+footer.fields.phone" class="footer__phone">{{ footer.fields.phone }}</a>
        </div>
        <div class="footer__map">
          <h2>Nous trouver</h2>
          <RichText :content="footer.fields.adress" />
          <iframe :src="mapSrc" width="890" height="324" frameborder="0" style="border:0"></iframe>
        </div>
      </div>
    </div>
    <div class="footer__down">
      <span class="footer__copyright">© Copyright AurorAlpes 2020</span>
      <div class="footer__socials">
        <h5 class="footer__socials-title">Suivez nos aventures</h5>
        <Socials :fb="socials.facebook" :insta="socials.instagram" :twitter="socials.twitter" class="footer__socials-container"/>
      </div>
    </div>
  </footer>
</template>

<script>
  import Mail from '~/components/common/Mail';
  import RichText from '~/components/common/RichText';
  import Socials from '~/components/common/Socials';

  export default {
    name: 'Footer',
    components: {
      Mail,
      RichText,
      Socials,
    },
    computed: {
      footer() {
        return this.$store.state.global.footer;
      },
      socials() {
        return this.footer.fields.sn.fields;
      },
      mapSrc() {
        return `https://maps.google.com/maps?q=${this.footer.fields.localisation.lat}, ${this.footer.fields.localisation.lon}&z=15&output=embed`;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .footer {}
  .footer__up {
    padding: 100px 0;

    .o-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .footer__contact {
    max-width: 370px;
    width: 100%;
    margin-right: 24px;
  }
  .footer__mail:not(:last-child) {
    margin-bottom: 44px;
  }
  .footer__map {
    max-width: 890px;
    width: 100%;

    iframe {
      width: 100%;
    }
  }
  .footer__down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 55px 65px 55px 45px;
    color: $white;
  }
  .footer__socials-title {
    display: inline-block;
    margin-right: 60px;
    vertical-align: middle;
  }
  .footer__socials-container {
    display: inline-block;
    vertical-align: middle;
  }
  .footer__copyright {
    font-size: 15px;
  }
</style>