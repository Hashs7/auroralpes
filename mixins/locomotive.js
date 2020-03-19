const OFFSET = 350;

// https://codesandbox.io/embed/locomotive-scroll-nuxt-jtoyb

export default {
  data() {
    return {
      scrollPosition: 0,
      lmS: 0,
    };
  },
  watch: {
    $route() {
      console.log("route changed: ", this.$route);
      this.lmS.update();
    }
  },
  mounted() {
    this.$nextTick(
      function() {
        this.lmS = new this.locomotiveScroll({
          el: document.querySelector("#main"),
          smooth: true /* if false disable overflow: hidden on html, body */
        });

        // this.lmS.on("scroll", _.throttle(this.onLmsScroll, 150));
        // this.lmS.on("scroll", this.onLmsScroll);
        window.addEventListener(
          "resize",
          // _.debounce(this.onLmsResize.bind(this), 100)
          this.onLmsResize
        );
      }.bind(this)
    );
  },
  destroyed() {
    this.lmS.destroy();
    window.removeEventListener("resize", this.onLmsResize);
  },
  methods: {
    onLmsScroll(obj) {
      this.scrollPosition = obj["scroll"]["y"];
      console.log("scrollPosition + na", this.scrollPosition);
      /*if (this.scrollPosition < OFFSET) {
        if (this.isNavSmall) {
          console.log("grow");
          mutations.growNav();
        }
      } else {
        if (!this.isNavSmall) {
          console.log("shrink");
          mutations.shrinkNav();
        }
      }*/
    },
    onLmsResize() {
      this.lmS.update();
    }
  }
};
