<template>
  <main id="main" role="main">
      <header>
        <MenuNavigation/>
      </header>
      <nuxt/>
      <Footer/>
  </main>
</template>

<script>
  import Navigation from '@/components/Navigation';
  import MenuNavigation from "../components/layout/menu/MenuNavigation";
  import Footer from "../components/layout/Footer";

  export default {
    components: {
      MenuNavigation,
      Navigation,
      Footer,
    },
  }
</script>
<style>

  .page-loader-enter-active {
    animation: bounce-in .5s;
  }

  .page-loader-leave-active {
    background-color: #f00;
    animation: bounce-in .5s;
  }

  @keyframes bounce-in {
    0% {
      width: 0;
    }
    50% {
      width: 100vw;
    }
    100% {
      width: 0;
    }
  }
</style>
