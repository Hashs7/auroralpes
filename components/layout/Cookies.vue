<template>
  <div class="cookieNotice">
    <transition name="slide">
      <div ref="header" v-if="show" class="cookieNotice__header">
        <p>Nous utilisons des cookies et avec votre consentement nous les exploitons pour améliorer votre expérience.</p>
        <div class="btn-container">
          <button @click="onCustomizeClick" class="cookieNotice__button cookieNotice__button--secondary">Personnaliser</button>
          <button @click="rejectAll" class="cookieNotice__button">Refuser</button>
          <button @click="acceptAll" class="cookieNotice__button">Accepter</button>
        </div>
      </div>
    </transition>
    <transition
      :css="false"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div v-if="showDetail" class="cookieNotice__content">
        <div @click="hideDetail" class="cookieNotice__close">
          Fermer
        </div>
        <div ref="body" class="cookieNotice__body">
          <h3>Confidentialité</h3>
          <p>
            Cet espace à pour vocation de vous permettre de prendre connaissance des différents éléments en place sur notre site mais également de pouvoir configurer un ensemble d’autorisations ou de
            refus concernant le traitement de vos données personnelles.
          </p>

          <p>
            De plus, conformément à la <a href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000886460" target="_blank" rel="noopener">loi Informatique et Libertés</a> et au <a
              href="https://www.cnil.fr/fr/textes-officiels-europeens-protection-donnees"
              target="_blank"
              rel="noopener"
            >RGPD</a>, vous avez le droit de : demander l’accès aux données personnelles
            collectées vous concernant, leurs rectifications, leur effacement, la limitation du traitement ou encore le droit de vous opposer au traitement ou retirer votre consentement, et de
<!--            demander la portabilité des données en vous adressant à <a :href="'mailto:'+footer.fields.email">{{ footer.fields.email }}</a>. Vous avez également la possibilité d’introduire-->
            une réclamation auprès d’une autorité de contrôle.
          </p>

          <h4>Responsable du traitement</h4>
          <address>
<!--            <RichText :content="settings.fields.location" />-->
            <br>
<!--            <span><a :href="'tel:'+footer.fields.phone">{{ footer.fields.phone }}</a></span>-->
<!--            <span><a :href="'mailto:'+footer.fields.email">{{ footer.fields.email }}</a></span>-->
          </address>

          <h4>Gestion des cookies et traceurs</h4>
          <strong>Qu'est ce qu'un cookie / traceur ?</strong>
          <p>
            Le terme cookie est à prendre au sens large et regroupe également les traceurs déposés, sous réserve de vos choix, sur votre ordinateur lors de la visite d’un site. Il a pour but de
            collecter des informations relatives à votre navigation et de vous adresser des services adaptés à votre terminal (ordinateur, mobile ou tablette).
          </p>
          <p>Les cookies sont gérés par votre navigateur Internet et seul l’émetteur d’un cookie est susceptible de lire ou de modifier les informations qui y sont contenues.</p>

          <h4>Préférences pour tous les services :</h4>


          <table class="cookieNotice__table">
            <thead>
              <tr>
                <th width="20%">Traceur</th>
                <th width="40%">Description et fonction</th>
                <th width="6%" />
              </tr>
            </thead>
            <tbody>
              <tr v-for="service in services" :key="service.id">
                <td><strong>{{ service.name }}</strong></td>
                <td v-html="service.description" />
                <td>
                  <input v-model="service.enabled" :id="service.id" :aria-label="service.name" type="checkbox" class="cookieNotice__toggle">
                  <label :for="service.id" :aria-label="service.name" class="cookieNotice__toggle__button" />
                </td>
              </tr>
            </tbody>
          </table>
          <button @click="validate" class="cookieNotice__submit">Valider</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { gsap, Quint } from 'gsap';
import RichText from '../common/RichText';

export default {
  components: { RichText },
  data() {
    return {
      show: false,
      showDetail: false,
      COOKIE_NAME_SETTINGS: 'rgpd_settings',
      COOKIE_NAME_IS_EU: 'is_eu',
      MAX_DAYS_COOKIE: 365,
      services: [
        {
          id: 'ga',
          enabled: false,
          name: 'Google Analytics',
          description: '<p>Service d’analyse d’audience de site Web et d’application. Son utilisation nous permet d’améliorer l’architecture du site et de localiser de potentiels problèmes. Nous n’avons pas ajouté de limites à la durée de stockage. S’il y a refus du traceur, nous anonymisons les données.\n' +
            '\n' +
            'Ce service est développé hors de l’Union Européenne aux États-Unis. Il y a donc transfert des données. Nous avons vérifié leurs engagements au regard du RGPD.</p>',
          method: this.acceptGA,
        },
      ],
    };
  },
  computed: {
    footer() {
      return this.$store.state.global.footer;
    },
    settings() {
      return this.$store.state.global.settings;
    },
  },
  watch: {
    showDetail(value) {
      document.body.style.overflow = value ? 'hidden' : '';
    },
  },
  async mounted() {
    this.services.forEach((service) => {
      service.method();
    });
    this.checkAlreadyAccepted();
  },
  methods: {
    hideDetail() {
      this.showDetail = false;
    },
    onCustomizeClick() {
      this.showDetail = true;
      // eslint-disable-next-line
      // window._paq.push(['trackEvent', 'RGPD', 'Customize']);
    },


    /**
       * Animation
       */
    onEnter(el, done) {
      const first = this.$refs.header.getBoundingClientRect();

      const deltaX = first.left;
      const deltaY = first.top;
      const deltaW = first.width / document.body.offsetWidth;
      const deltaH = first.height / window.innerHeight;

      gsap.fromTo(el, {
        transformOrigin: 'top left',
        x: deltaX,
        y: deltaY,
        scaleX: deltaW,
        scaleY: deltaH,
      }, {
        duration: 0.3,
        scale: 1,
        x: 0,
        y: 0,
        ease: Quint.easeOut,
      });
      gsap.from(this.$refs.body, {
        delay: 0.3,
        opacity: 0,
      }, {
        duration: 0.2,
        ease: Quint.easeOut,
        opacity: 1,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      gsap.to(this.$refs.body, {
        duration: 0.2,
        ease: Quint.easeOut,
        opacity: 0,
      });

      gsap.to(el, {
        duration: 0.3,
        y: '100%',
        ease: Quint.easeOut,
        onComplete: done,
      });
    },

    /**
       * Cookies
       */
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop().split(';').shift();
      }
      return null;
    },
    setCookie(name, value, days = 7) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; expires=${date.toUTCString()}; path=/`;
    },
    validate() {
      this.services.forEach((service) => {
        if (service.enabled) {
          service.method();
          // eslint-disable-next-line
          // window._paq.push(['trackEvent', 'RGPD', 'Accept', service.name]);
        }
      });
      this.setCookie(this.COOKIE_NAME_SETTINGS, this.getSettingsString(), this.MAX_DAYS_COOKIE);
      this.showDetail = false;
      this.show = false;
    },
    checkAlreadyAccepted() {
      const cookie = this.getCookie(this.COOKIE_NAME_SETTINGS);

      // No prior settings
      if (!cookie) {
        this.show = true;
        return;
      }

      // Enable accepted services
      const value = JSON.parse(decodeURIComponent(cookie));
      this.services.forEach((service) => {
        const enabled = value[service.id] === 1;
        // eslint-disable-next-line no-param-reassign
        service.enabled = enabled;
        if (enabled) {
          service.method();
        }
      });

      // Check if new services
      if (Object.keys(value).length < this.services.length) {
        this.show = true;
      }
    },
    getSettingsString() {
      return this.services.reduce((acc, val) => {
        acc[val.id] = val.enabled ? 1 : 0;
        return acc;
      }, {});
    },
    rejectAll() {
      this.setCookie(this.COOKIE_NAME_SETTINGS, this.getSettingsString(), this.MAX_DAYS_COOKIE);
      this.showDetail = false;
      this.show = false;
    },
    /**
       * Accept methods
       */
    acceptAll() {
      this.services.forEach((service) => {
        // eslint-disable-next-line no-param-reassign
        service.enabled = true;
        service.method();
      });
      this.setCookie(this.COOKIE_NAME_SETTINGS, this.getSettingsString(), this.MAX_DAYS_COOKIE);
      this.showDetail = false;
      this.show = false;
      // eslint-disable-next-line
      // window._paq.push(['trackEvent', 'RGPD', 'All']);
    },
    acceptMatomo() {
      // eslint-disable-next-line
      // window._paq.push(['setConsentGiven']);
    },
    acceptGA() {
      // eslint-disable-next-line
      this.$ga.enable()
    },
  },
};
</script>
<style lang="scss">
  .cookieNotice__header {
    position: fixed;
    bottom: 0;
    left: 50%;
    max-width: 1280px;
    width: 100%;
    transform: translateX(-50%);
    z-index: 500;
    border-radius: 12px 12px 0 0;
    background-color: $white;
    box-shadow: 0 1px 8px rgba(75, 29, 48, 0.2);
    padding: 8px 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-size: 0.8rem;
    line-height: 24px;
    justify-content: space-between;
    color: #767575;

    &.slide-enter-active, &.slide-leave-active {
      transition: transform .07s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    &.slide-enter, &.slide-leave-to {
      transform: translateX(-50%) translateY(100%);
    }

    div {
      flex-shrink: 0;
      display: flex;
      margin-left: 12px;
    }
    .btn-container {
      margin-bottom: 35px;
    }
  }


  .cookieNotice__content {
    background-color: $white;
    padding: 60px 40px;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 500;
    overflow: auto;
    font-size: 0.9rem;
    line-height: 1.3rem;

    p + p {
      margin-top: 26px;
    }

    strong {
      font-weight: 900;
    }

    address {
      font-style: normal;
      span {
        display: block;
      }
    }

    a {
      color: $secondary;
      font-weight: 900;
    }


    h4 {
      margin-top: 80px;
      font-size: 1.2rem;
      margin-bottom: 6px;
    }

    h3 {
      margin: 0 auto 40px;
      text-align: left;
    }
  }

  .cookieNotice__close {
    cursor: pointer;
  }

  .cookieNotice__body {
    max-width: 1024px;
    margin: 0 auto;
  }

  .cookieNotice__table {
    border-collapse: collapse;
    margin: 50px 0 100px;

    th, td {
      padding: 16px;
      border: 1px solid #D6D6D6;

      &:first-child {
        border-left: 0;
      }

      &:last-child {
        border-right: 0;
      }
    }

    thead tr th {
      border-top: 0;
    }

    tbody tr:last-child td {
      border-bottom: 0;
    }
  }

  .cookieNotice__button {
    color: $primary-dark;
    cursor: pointer;
    margin: 0;
    border: 0;
    outline: none;
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out, color 0.15s ease-out;
    background-color: #ffffff;
    padding: 14px 16px;
    border-radius: 4px;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 0.75rem;
    font-weight: 700;
    white-space: nowrap;
    letter-spacing: 0.7px;

    @include hover() {
      background-color: transparentize($primary, 0.95);
      color: $primary-dark !important;
    }

    &.cookieNotice__button--secondary {
      color: $secondary-light;
      border-color: transparent;

      @include hover() {
        background-color: transparentize($secondary, 0.95);
        color: $secondary !important;
      }
    }
  }

  .cookieNotice__submit {
    display: block !important;
    width: 100%;
    font-size: 0.9rem;
    max-width: 240px;
    margin: 0 auto;
    border: none;
    padding: 12px 0 !important;
    background-color: $gray-dark;
    border-radius: 4px;
    transition: all .3s ease-in-out;
    font-weight: 500;

    @include hover {
      background-color: $secondary;
      color: $white;
    }
  }

  .cookieNotice__toggle {
    display: none;

    &,
    &:after,
    &:before,
    & *,
    & *:after,
    & *:before,
    & + .cookieNotice__toggle__button {
      box-sizing: border-box;

      &::selection {
        background: none;
      }
    }

    &:checked + .cookieNotice__toggle__button:after {
      left: 50%;
    }


    &:checked + .cookieNotice__toggle__button {
      background: #00E676;
    }
  }

  .cookieNotice__toggle__button {
    outline: 0;
    display: block;
    width: 50px;
    height: 27px;
    position: relative;
    cursor: pointer;
    user-select: none;
    background: $secondary;
    border-radius: 40px;
    padding: 2px;
    transition: all .4s ease-out;

    &:after {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      border-radius: 50%;
      background: #fff;
      transition: all .2s ease;
    }
  }

  /**
   * Responsive
   */
  @media screen and (max-width: 1000px) {
    .cookieNotice__header {
      flex-direction: column;
      align-items: flex-start;
      div {
        margin-top: 8px;
        flex-wrap: wrap;
      }
    }
    .cookieNotice__table {
      thead {
        display: none;
      }
      tbody tr td:first-child {
        border-top: 1px solid #D6D6D6 !important;
      }

      tbody tr:last-child td:last-child {
        border-bottom: 1px solid #D6D6D6 !important;
      }

      tbody tr:last-child td {
        border-bottom: 1px solid #D6D6D6 !important;
      }

      tr + tr td:first-child {
        margin-top: 26px;
        border-top: 1px solid #D6D6D6 !important;
      }

      th, td {
        display: block;
        border-top: 0!important;

        &:first-child {
          border-left: 1px solid #D6D6D6 !important;
        }

        &:last-child {
          border-right: 1px solid #D6D6D6 !important;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .cookieNotice__header {
      padding: 0 15px 0 15px;
      transform: none;
      left: 0;
      right: 0;


      &.slide-enter, &.slide-leave-to {
        transform: translateY(100%);
      }

      div {
        margin-left: 0;
        margin-bottom: 8px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .cookieNotice__button--secondary {
      width: 100%;
      text-align: left;
    }
  }
</style>
