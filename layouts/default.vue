<template>
  <main  role="main">
    <Intro />
    <MenuBurger />
    <MenuModal />
    <Cookies />
    <div id="main">
      <MenuHeader/>
      <nuxt/>
      <Footer/>
    </div>
  </main>
</template>

<script>
  import Intro from '~/components/Intro'
  import MenuHeader from "../components/layout/menu/MenuHeader";
  import MenuModal from '~/components/layout/menu/MenuModal';
  import MenuBurger from '~/components/layout/menu/MenuBurger';
  import Footer from "../components/layout/Footer";
  import Cookies from '~/components/layout/Cookies';

  export default {
    components: {
      Intro,
      MenuHeader,
      MenuModal,
      MenuBurger,
      Footer,
      Cookies,
    },
  }
</script>
