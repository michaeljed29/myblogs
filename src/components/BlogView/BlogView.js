import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import moment from "moment";
import {
  BlogViewContainer,
  Title,
  Date,
  Content,
  TitleWrapper,
  Back,
} from "./BlogViewStyle";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { likeBlog, removeCurrent } from "../../actions/blogAction";

const BlogView = ({ history }) => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.blog);
  const { id, title, content, liked, createdAt } = current;

  useEffect(() => {
    if (isEmpty(current)) history.push("/");
  }, current);
  const onLike = () => {
    dispatch(likeBlog(id));
  };

  const onBack = () => {
    dispatch(removeCurrent());
    history.push("/");
  };
  return (
    <section>
      <BlogViewContainer className="container">
        <TitleWrapper>
          <Title>{title}</Title>
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
        </TitleWrapper>

        <Date>Date: {moment(createdAt).format("MMMM Do YYYY")}</Date>
        <Content>{content}</Content>
        <Back to="#" onClick={onBack}>
          <ArrowBackIcon style={{ fontSize: 20, marginRight: 5 }} /> Back
        </Back>
      </BlogViewContainer>
    </section>
  );
};

export default BlogView;
