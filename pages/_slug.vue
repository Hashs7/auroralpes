<template>
  <section>
    {{story.name}}
  </section>
</template>

<script>
  export default {
    data() {
      return {story: {content: {}}}
    },
    asyncData(context) {
      // Check if we are in the editor mode
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

      // Load the JSON from the API
      return context.app.$storyapi.get(`cdn/stories/${context.params.slug}`, {
        version: version
      }).then((res) => {
        return res.data
      }).catch((res) => {
        context.error({statusCode: res.response.status, message: res.response.data})
      })
    }
  }
</script>

<style scoped>

</style>
