import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Blogs from "../Blogs/Blogs";
import Widget from "../Widget/Widget";
import ClearIcon from "@material-ui/icons/Clear";
import {
  HomeSection,
  PaginationWrapper,
  SearchInfo,
  HomeContainer,
} from "./HomeStyle";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  addBlog,
  editBlog,
  removeCurrent,
  setCurrentPage,
  searchBlog,
} from "../../actions/blogAction";
import Pagination from "@material-ui/lab/Pagination";
import {
  openFormModal,
  closeFormModal,
  setAlert,
} from "../../actions/utilAction";

const initialBlog = {
  title: "",
  description: "",
  content: "",
  liked: false,
};

const Home = ({
  history,
  addBlog,
  editBlog,
  current,
  removeCurrent,
  isOpenFormModal,
  closeFormModal,
  setAlert,
  searchKey,
  setCurrentPage,
  currentPage,
  currentBlogCount,
  blogPerPage,
  searchBlog,
}) => {
  const [blog, setBlog] = useState(initialBlog);

  const { title, description, content, liked } = blog;

  useEffect(() => {
    if (!isEmpty(current)) setBlog(current);
  }, [current]);

  const handleCloseFormModal = () => {
    removeCurrent(removeCurrent);
    closeFormModal();
    setBlog(initialBlog);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { title, content, description } = blog;

    if (!title.trim() || !content.trim() || !description.trim()) {
      setAlert({ type: "error", msg: "All Fields are Required" });
      return;
    }

    if (!isEmpty(current)) {
      editBlog(blog);
      setBlog(initialBlog);
      closeFormModal();
      setAlert({ type: "success", msg: "Blog Successfully updated!" });
      return;
    }

    addBlog(blog);
    setBlog(initialBlog);
    closeFormModal();
    setAlert({ type: "success", msg: "Blog Successfully added!" });
  };

  const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

  const onPaginate = (e, page) => {
    setCurrentPage(page);
  };

  const pageCount = Math.ceil(currentBlogCount / blogPerPage);

  return (
    <HomeSection>
      <HomeContainer className="container">
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          open={isOpenFormModal}
          onClose={handleCloseFormModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <form onSubmit={onSubmit}>
            <DialogTitle style={{ padding: 24, fontSize: 24 }}>
              <Typography variant="h3" component="p">
                {!isEmpty(current) ? "Update Blog" : "Add Blog"}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <TextField
                id="standard-full-width"
                label="Title"
                placeholder="Enter Title"
                fullWidth
                margin="normal"
                inputProps={{
                  style: {
                    fontSize: 16,
                    padding: "5px 0",
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: 16 },
                }}
                name="title"
                onChange={onChange}
                value={title}
                color="secondary"
                required
              />

              <TextField
                id="standard-full-width"
                label="Description"
                placeholder="Enter Description"
                fullWidth
                margin="normal"
                inputProps={{ style: { fontSize: 16, padding: "5px 0" } }}
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: 16 },
                }}
                name="description"
                onChange={onChange}
                value={description}
                color="secondary"
                required
              />

              <TextField
                multiline={true}
                label="Content"
                style={{ fontSize: 16 }}
                placeholder="Enter Content"
                fullWidth
                margin="normal"
                inputProps={{
                  style: { fontSize: 16, lineHeight: 1.2, padding: "5px 0" },
                }}
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: 16 },
                }}
                rows={20}
                name="content"
                onChange={onChange}
                value={content}
                color="secondary"
                required
              />
            </DialogContent>
            <DialogActions style={{ padding: 24 }}>
              <Button
                style={{ fontSize: 13 }}
                className="btn-ghost"
                onClick={handleCloseFormModal}
                color="primary"
              >
                Cancel
              </Button>
              <Button
                style={{ fontSize: 13 }}
                className="btn-full"
                variant="contained"
                onClick={onSubmit}
                color="primary"
                autoFocus
                type="submit"
              >
                {!isEmpty(current) ? "Update" : "Save"}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        <Widget />

        {searchKey && (
          <SearchInfo>
            <p>
              Search results for <span>"{searchKey}"</span>{" "}
              {`${currentBlogCount} item${currentBlogCount > 1 ? "s" : ""}`}{" "}
              found
            </p>
            <ClearIcon
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={() => searchBlog("")}
            />
          </SearchInfo>
        )}

        <Blogs history={history} />
        {pageCount > 1 && (
          <PaginationWrapper>
            <Pagination
              style={{ fontSize: 20 }}
              count={pageCount}
              onChange={onPaginate}
              size="large"
              color="secondary"
            />
          </PaginationWrapper>
        )}
      </HomeContainer>
    </HomeSection>
  );
};

const mapStateToProps = (state) => ({
  blogs: state.blog.blogs,
  current: state.blog.current,
  currentPage: state.blog.currentPage,
  searchKey: state.blog.searchKey,
  currentBlogCount: state.blog.currentBlogCount,
  blogPerPage: state.blog.blogPerPage,
  isOpenFormModal: state.util.isOpenFormModal,
});

const mapDispatchToProps = (dispatch) => ({
  addBlog: (blog) => dispatch(addBlog(blog)),
  editBlog: (blog) => dispatch(editBlog(blog)),
  removeCurrent: () => dispatch(removeCurrent()),
  openFormModal: () => dispatch(openFormModal()),
  closeFormModal: () => dispatch(closeFormModal()),
  setAlert: (alert) => dispatch(setAlert(alert)),
  setCurrentPage: (pageCount) => dispatch(setCurrentPage(pageCount)),
  searchBlog: (searchKey) => dispatch(searchBlog(searchKey)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
