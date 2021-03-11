import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  BlogContainer,
  Title,
  Date,
  Description,
  FooterButtons,
  SeeMore,
  ActionButtons,
} from "./BlogStyle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { likeBlog, setCurrent, removeBlog } from "../../actions/blogAction";
import { openFormModal, setAlert } from "../../actions/utilAction";

const Blog = ({
  blog,
  history,
  likeBlog,
  setCurrent,
  openFormModal,
  setAlert,
  removeBlog,
}) => {
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  const { id, title, description, content, liked, createdAt } = blog;

  console.log("blog", blog);

  const onSeaMore = () => {
    setCurrent(blog);
    history.push("/blog-view");
  };

  const onEdit = () => {
    setCurrent(blog);
    openFormModal();
  };

  const onDelete = () => {
    removeBlog(id);
    setIsOpenConfirmation(false);

    setAlert({ type: "success", msg: "Blog Successfully deleted" });
  };

  const onLike = () => {
    likeBlog(id);
  };

  const onCancelDelete = () => {
    setIsOpenConfirmation(false);
  };

  return (
    <BlogContainer>
      <Dialog
        open={isOpenConfirmation}
        keepMounted
        onClose={onCancelDelete}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText
            style={{ fontSize: 16 }}
            id="alert-dialog-slide-description"
          >
            Are you sure you want to delete this blog?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ fontSize: 13 }}
            className="btn-ghost"
            onClick={onCancelDelete}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            style={{ fontSize: 13 }}
            className="btn-full"
            onClick={onDelete}
            color="primary"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <IconButton
        className="icon-like-btn"
        style={{
          color: "#A288E3",
        }}
        onClick={onLike}
      >
        {liked ? (
          <FavoriteIcon className="icon" />
        ) : (
          <FavoriteBorderIcon className="icon" />
        )}
      </IconButton>
      <Title>{title}</Title>
      <Date>Date: {moment(createdAt).format("MMMM Do YYYY")}</Date>
      <Description>{description}</Description>
      <FooterButtons>
        <SeeMore onClick={onSeaMore}>See more...</SeeMore>
        <ActionButtons>
          <IconButton
            style={{
              color: "#4791db",
            }}
            onClick={onEdit}
          >
            <EditIcon className="icon" />
          </IconButton>
          <IconButton
            style={{
              color: "#e57373",
            }}
            onClick={() => {
              setIsOpenConfirmation(true);
            }}
          >
            <DeleteIcon className="icon" />
          </IconButton>
        </ActionButtons>
      </FooterButtons>
    </BlogContainer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setCurrent: (blog) => dispatch(setCurrent(blog)),
  likeBlog: (id) => dispatch(likeBlog(id)),
  openFormModal: () => dispatch(openFormModal()),
  setAlert: (alert) => dispatch(setAlert(alert)),
  removeBlog: (id) => dispatch(removeBlog(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
