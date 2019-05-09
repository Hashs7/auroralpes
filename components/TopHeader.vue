<template>
  <header class="top-header util__flex util__container">
    <nav class="top-header__col">
      <ul class="nav">
        <li>
          <nuxt-link class="nav__item" to="/home">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__item" to="/association">L’association</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__item" to="/festival">Le festival</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__item" to="/nous-aider">Nous aider</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__item" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <nav class="top-header__col top-header__second-navi">
      <ul class="nav">
        <li>
          <nuxt-link class="nav__item" to="/en/home">English</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__item" to="/fr/home">Français</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  .top-header {
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .top-header__logo {
    text-align: center;
    position: absolute;
    left: 50%;

    img {
      position: relative;
      max-height: 60px;
      left: -50%;
      top: -15px;
    }
  }

  .top-header__second-navi {
    text-align: right;
  }
</style>
