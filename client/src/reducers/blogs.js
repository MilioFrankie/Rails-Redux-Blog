import axios from "axios";

const BLOGS = "BLOGS";
const ADD_BLOG = "ADD_BLOG";

export const getBlogs = loader => {
  return dispatch => {
    axios
      .get("/api/blogs")
      .then(res => dispatch({ type: BLOGS, blogs: res.data }))
      .then(loader);
  };
};

export const addBlog = blog => {
  return dispatch => {
    axios
      .post("/api/blogs", { blog })
      .then(res => dispatch({ type: ADD_BLOG, blog: res.data }));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case BLOGS:
      return action.blogs;
    case ADD_BLOG:
      return [action.blog, ...state];
    default:
      return state;
  }
};
