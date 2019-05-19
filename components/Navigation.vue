<template>
    <nav class="header-menu">
        <nuxt-link to="/home" class="nuxt-link">Accueil</nuxt-link>
        <nuxt-link to="/association" class="nuxt-link">L'association</nuxt-link>
        <nuxt-link to="/festival" class="nuxt-link">Le festival</nuxt-link>
        <nuxt-link to="/nous-aider" class="nuxt-link">Nous aider</nuxt-link>
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