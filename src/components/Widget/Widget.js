import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { WidgetContainer, Wrapper, Sort } from "./WidgetStyle";
import { openFormModal } from "../../actions/utilAction";
import { filterBlog, setSort } from "../../actions/blogAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Widget = ({
  openFormModal,
  isFilteredByFavourite,
  filterBlog,
  sort,
  setSort,
}) => {
  // const [sort, setSort] = useState({});
  const onCreate = () => {
    openFormModal();
  };

  console.log("isFilteredByFavourite", isFilteredByFavourite);

  const onSort = (type) => () => {
    if (type !== sort.type) {
      setSort({
        type,
        asc: true,
        des: false,
      });
    }

    if (type === sort.type && sort.asc) {
      setSort({
        type,
        asc: false,
        des: true,
      });
    }

    if (type === sort.type && sort.des) {
      setSort({});
    }
  };

  console.log("mysort", sort);

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

  // () => {
  //   if (sort.type !== "title") {
  //     setSort({
  //       type: "title",
  //       asc: true,
  //       des: false,
  //     });
  //   }

  //   if (sort.type === "title" && sort.asc) {
  //     setSort({
  //       type: "title",
  //       asc: false,
  //       des: true,
  //     });
  //   }

  //   if (sort.type === "title" && sort.des) {
  //     setSort({
  //       type: "title",
  //       asc: false,
  //       des: false,
  //     });
  //   }
  // };
  return (
    <WidgetContainer>
      <Wrapper>
        <Button
          variant={isFilteredByFavourite ? "contained" : "outlined"}
          startIcon={<FavoriteIcon />}
          style={buttonStyle}
          onClick={() => filterBlog()}
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
const mapStateToProps = (state) => ({
  isFilteredByFavourite: state.blog.isFilteredByFavourite,
  sort: state.blog.sort,
});

const mapDispatchToProps = (dispatch) => ({
  openFormModal: () => dispatch(openFormModal()),
  filterBlog: () => dispatch(filterBlog()),
  setSort: (sort) => dispatch(setSort(sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
