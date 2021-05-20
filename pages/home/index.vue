<template>
  <div>
    <h1>
      welcome
    </h1>
    
    <div v-for="(blog, i) in blogs" :key="i">
      <p>
        {{ blog.id }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {

  async fetch({store}) {
    await store.dispatch('blogs/fetchBlogs')
  },

  computed: {
    ...mapState('blogs', {
      blogs: state => state.blogs
    })
  }
};
</script>
