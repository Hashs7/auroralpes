<template>
  <main  role="main">
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
  import MenuHeader from "../components/layout/menu/MenuHeader";
  import MenuModal from '~/components/layout/menu/MenuModal';
  import MenuBurger from '~/components/layout/menu/MenuBurger';
  import Footer from "../components/layout/Footer";
  import Cookies from '~/components/layout/Cookies';

  export default {
    components: {
      MenuHeader,
      MenuModal,
      MenuBurger,
      Footer,
      Cookies,
    },
  }
</script>
