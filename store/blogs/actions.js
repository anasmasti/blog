export default {
    //Ffetch blogs
    async fetchBlogs({ commit }) {
      await this.$axios
        .$get("posts")
        .then(res => {
          commit("SET_BLOGS", res);
        })
        .catch(err => {
          commit("SET_BLOGS_ERROR", err);
        });
    }
  };
  