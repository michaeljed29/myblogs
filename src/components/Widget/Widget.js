import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { WidgetContainer, Wrapper, Sort } from "./WidgetStyle";
import { openFormModal } from "../../actions/utilAction";
import { filterBlog, setSort } from "../../actions/blogAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Widget = () => {
  const dispatch = useDispatch();
  const { isFilteredByFavourite, sort } = useSelector((state) => state.blog);
  const onCreate = () => {
    dispatch(openFormModal());
  };

  const onSort = (type) => () => {
    if (type !== sort.type) {
      dispatch(
        setSort({
          type,
          asc: true,
          des: false,
        })
      );
    }

    if (type === sort.type && sort.asc) {
      dispatch(
        setSort({
          type,
          asc: false,
          des: true,
        })
      );
    }

    if (type === sort.type && sort.des) {
      dispatch(setSort({}));
    }
  };

  const buttonStyle = isFilteredByFavourite
    ? {
        background: "#6D7D8B",
        textTransform: "initial",
        color: "#F0F0F6",
        fontSize: 10,
      }
    : {
        background: "transparent",
        textTransform: "initial",
        color: "#6D7D8B",
        fontSize: 10,
      };

  return (
    <WidgetContainer>
      <Wrapper>
        <Button
          variant={isFilteredByFavourite ? "contained" : "outlined"}
          startIcon={<FavoriteIcon />}
          style={buttonStyle}
          onClick={() => dispatch(filterBlog())}
        >
          Filtered By Favourite
        </Button>

        <Sort>
          <span>Sort By:</span>
          <span onClick={onSort("title")} className="sort-btn">
            Title
            {sort.type === "title" && sort.asc && <ArrowUpwardIcon />}
            {sort.type === "title" && sort.des && <ArrowDownwardIcon />}
          </span>
          <span onClick={onSort("createdAt")} className="sort-btn">
            Date
            {sort.type === "createdAt" && sort.asc && <ArrowUpwardIcon />}
            {sort.type === "createdAt" && sort.des && <ArrowDownwardIcon />}
          </span>
        </Sort>
      </Wrapper>
      <Button
        className="btn btn-full"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onCreate}
      >
        Create Blog
      </Button>
    </WidgetContainer>
  );
};

export default Widget;
