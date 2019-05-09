<template>
  <div v-editable="blok">
    <h1>{{ blok.baseline }}</h1>
  </div>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>
