import {
  ADD_BLOG,
  EDIT_BLOG,
  REMOVE_BLOG,
  LIKE_BLOG,
  SET_CURRENT,
  REMOVE_CURRENT,
  SEARCH_BLOG,
  FILTER_BLOG,
  SET_SORT,
  SET_CURRENT_PAGE,
  SET_CURRENT_BLOG_COUNT,
} from "./types";

export const addBlog = (blog) => {
  return {
    type: ADD_BLOG,
    payload: blog,
  };
};

export const editBlog = (blog) => {
  return {
    type: EDIT_BLOG,
    payload: blog,
  };
};

export const removeBlog = (id) => {
  return {
    type: REMOVE_BLOG,
    payload: id,
  };
};

export const likeBlog = (id) => {
  return {
    type: LIKE_BLOG,
    payload: id,
  };
};

export const searchBlog = (searchKey) => {
  return {
    type: SEARCH_BLOG,
    payload: searchKey,
  };
};

export const filterBlog = () => {
  return {
    type: FILTER_BLOG,
  };
};

export const setSort = (sort) => {
  return {
    type: SET_SORT,
    payload: sort,
  };
};

export const setCurrentPage = (pageCount) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: pageCount,
  };
};

export const setCurrentBlogCount = (blogCount) => {
  return {
    type: SET_CURRENT_BLOG_COUNT,
    payload: blogCount,
  };
};

export const setCurrent = (blog) => {
  return {
    type: SET_CURRENT,
    payload: blog,
  };
};

export const removeCurrent = () => {
  return {
    type: REMOVE_CURRENT,
  };
};
