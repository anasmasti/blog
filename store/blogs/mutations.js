export default {
    // set blogs to state
    SET_BLOGS(state, data) {
      state.blogs = data;
    },
  
    // set error if blog has error
    SET_BLOGS_ERROR(state, data) {
      state.blog_error_msg = data;
    }
  };