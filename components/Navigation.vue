<template>
    <nav class="header-menu">
        <nuxt-link to="/" class="nuxt-link">Auroralpes</nuxt-link>
        <nuxt-link to="/association" class="nuxt-link">L'équipe</nuxt-link>
        <nuxt-link to="/festival" class="nuxt-link">Nos projets</nuxt-link>
        <nuxt-link to="/nous-aider" class="nuxt-link">Le festival</nuxt-link>
        <nuxt-link to="/contact" class="nuxt-link">Contact</nuxt-link>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped lang="scss">
    .header-menu {
        display: flex;
        justify-content: space-between;
        max-width: 850px;
        margin: 50px 0 0 80px;
        font-size: 20px;
        font-weight: $weight-semibold;
    }

    .nuxt-link {
        color: $primary;
        text-decoration: none;
    }
    .exact-active-link {
        text-decoration: underline;
    }

</style>