<template>
  <footer class="footer">
    <div class="footer__up o-section--white">
      <div class="o-container">

        <div class="footer__contact">
          <h2 class="footer__title">Nous contacter</h2>
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
        </div>

        <div class="footer__map">
          <h2 class="footer__title">Nous trouver</h2>
          <RichText :content="footer.fields.adress" />
          <iframe :src="mapSrc" width="890" height="200" frameborder="0" style="border:0"></iframe>
        </div>

        <div class="footer__phone">
          <h2 class="footer__title">Nous parler</h2>
          <a :href="'tel:'+footer.fields.phone" class="footer__phone">{{ footer.fields.phone }}</a>
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
  .footer__title {
    margin-bottom: 28px;
  }
  .footer__up {
    padding: 100px 0;

    .o-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .footer__contact {
    max-width: 290px;
    width: 100%;
    margin-right: 24px;
  }
  .footer__mail:not(:last-child) {
    margin-bottom: 44px;
  }
  .footer__map {
    max-width: 500px;
    width: 100%;
    margin-right: 24px;

    iframe {
      width: 100%;
    }
  }
  .footer__down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 120px 20px 120px;
    color: $white;
    background: linear-gradient(150deg, #404553, #000000);
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
  .footer__phone {
    font-size: 1.6rem;
    color: $black;
  }
  @media #{$desktop-s-media} {
    .footer__up {
      padding: 50px 0;
      .o-container {
        max-width: 700px;
      }
    }
    .footer__contact {
      order: 0;
      margin-bottom: 38px;
    }
    .footer__map {
      order: 2;
    }
    .footer__phone {
      order: 1;
      margin-bottom: 38px;
    }
    .footer__down {
      padding-left: 32px;
    }
  }
  @media #{$tablet-l-media} {
    .footer__title {
      margin-bottom: 18px;
    }
    .footer__map {
      margin-right: 0;
    }
    .footer__socials-title {
      margin-right: 16px;
    }

    .footer__mail:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media #{$tablet-m-media} {
    .footer__down {
      flex-wrap: wrap;
    }
    .footer__copyright {
      width: 100%;
      margin-bottom: 28px;
    }
  }
  @media #{$mobile-l-media} {
    .footer__title {
      margin-bottom: 12px;
    }
    .footer__socials-title {
      margin-bottom: 8px;
    }
    .footer__map {
      margin-right: 0;
    }
    .footer__down {
      padding-right: 80px;
    }
    .footer__mail:not(:last-child) {
      margin-bottom: 20px;
    }
  }
</style>