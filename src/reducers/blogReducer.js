import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import {
  ADD_BLOG,
  EDIT_BLOG,
  REMOVE_BLOG,
  LIKE_BLOG,
  SEARCH_BLOG,
  FILTER_BLOG,
  SET_SORT,
  SET_CURRENT_PAGE,
  SET_CURRENT,
  REMOVE_CURRENT,
  SET_CURRENT_BLOG_COUNT,
} from "../actions/types";

const initialState = {
  blogs: [],
  current: {},
  searchKey: "",
  isFilteredByFavourite: false,
  sort: {},
  currentPage: 1,
  blogPerPage: 4,
  currentBlogCount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      action.payload.id = uuidv4();
      action.payload.createdAt = moment().format("YYYY-MM-DD");

      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case EDIT_BLOG:
      const newBlog = action.payload;
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === newBlog.id ? newBlog : blog
        ),
        current: {},
      };
    case REMOVE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
        current: {},
      };
    case LIKE_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === action.payload ? { ...blog, liked: !blog.liked } : blog
        ),
        current: { ...state.current, liked: !state.current.liked },
      };
    case SEARCH_BLOG:
      return {
        ...state,
        currentPage: 1,
        blogPerPage: 4,
        searchKey: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case FILTER_BLOG:
      return {
        ...state,
        isFilteredByFavourite: !state.isFilteredByFavourite,
        currentPage: 1,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_CURRENT_BLOG_COUNT:
      return {
        ...state,
        currentBlogCount: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case REMOVE_CURRENT:
      return {
        ...state,
        current: {},
      };
    default:
      return state;
  }
};
