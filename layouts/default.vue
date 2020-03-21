<template>
  <main id="main" role="main">
    <MenuHeader/>
    <nuxt/>
    <Footer/>
  </main>
</template>

<script>
  import MenuHeader from "../components/layout/menu/MenuHeader";
  import Footer from "../components/layout/Footer";

  export default {
    components: {
      MenuHeader,
      Footer,
    },
  }
</script>
