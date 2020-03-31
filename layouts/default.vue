<template>
  <main  role="main">
    <MenuBurger />
    <MenuModal />
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

  export default {
    components: {
      MenuHeader,
      MenuModal,
      MenuBurger,
      Footer,
    },
  }
</script>
