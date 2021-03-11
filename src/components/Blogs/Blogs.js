import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BlogsContainer, FeedBack } from "./BlogsStyle";
import Blog from "../Blog/Blog";
import { isEmpty } from "lodash";
import moment from "moment";
import { setCurrentBlogCount } from "../../actions/blogAction";

const Blogs = ({
  history,
  blogs,
  searchKey,
  isFilteredByFavourite,
  sort,
  currentPage,
  blogPerPage,
  setCurrentBlogCount,
}) => {
  let blogList = blogs;

  if (searchKey) {
    blogList = blogs.filter(({ title, description }) => {
      const query = searchKey.toLowerCase();
      return (
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
      );
    });
  }

  if (isFilteredByFavourite) {
    blogList = blogList.filter((blog) => blog.liked);
  }

  useEffect(() => {
    setCurrentBlogCount(blogList.length);
  }, [blogList]);

  const indexLastBlog = currentPage * blogPerPage;
  const indexFirstBlog = indexLastBlog - blogPerPage;

  let currentBlogs = blogList.slice(indexFirstBlog, indexLastBlog);

  if (!isEmpty(sort)) {
    currentBlogs = [...currentBlogs].sort(function (blogA, blogB) {
      if (sort.type === "title") {
        var titleA = blogA.title.toUpperCase();
        var titleB = blogB.title.toUpperCase();
        if (titleA < titleB) {
          return sort.asc ? -1 : 1;
        }
        if (titleA > titleB) {
          return sort.asc ? 1 : -1;
        }

        return 0;
      }
      if (sort.type === "createdAt") {
        var dateA = moment(blogA.createdAt).unix();
        var dateB = moment(blogB.createdAt).unix();

        return sort.asc ? dateA - dateB : dateB - dateA;
      }
    });
  }

  return (
    <div>
      {isEmpty(currentBlogs) ? (
        <FeedBack>No Blog To Show</FeedBack>
      ) : (
        <BlogsContainer>
          {currentBlogs.map((blog) => (
            <Blog key={blog.id} blog={blog} history={history} />
          ))}
        </BlogsContainer>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  blogs: state.blog.blogs,
  searchKey: state.blog.searchKey,
  isFilteredByFavourite: state.blog.isFilteredByFavourite,
  sort: state.blog.sort,
  currentPage: state.blog.currentPage,
  blogPerPage: state.blog.blogPerPage,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentBlogCount: (blogCount) => dispatch(setCurrentBlogCount(blogCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
