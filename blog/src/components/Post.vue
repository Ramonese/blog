<template>
  <div>
    <div>
      <img v-if= "post.featuredMedia" :src="'http://favoritethings.azurewebsites.net' + post.featuredMedia.sourceUrl" /> 
    </div> 
    <h2 v-html="post.title" />
   <!-- <p v-html="post.author.name" /> -->
    <p v-html="post.date" />
    <div v-html="post.excerpt" />
    <g-link :to="post.path">
      Read More
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
