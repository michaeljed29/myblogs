import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Header as HeaderTag,
  Logo,
  Search,
  SearchWrapper,
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { searchBlog } from "../../actions/blogAction";

const Header = ({ searchBlog }) => {
  const [searchKey, setSearchKey] = useState("");
  const onChange = (e) => setSearchKey(e.target.value);
  const onSearch = (e) => {
    e.preventDefault();
    searchBlog(searchKey);
    setSearchKey("");
  };

  return (
    <HeaderTag>
      <div className="container">
        <Link to="/">
          <Logo>myblogs</Logo>
        </Link>
        <form onSubmit={onSearch}>
          <SearchWrapper>
            <SearchIcon className="search-icon" />
            <Search
              onChange={onChange}
              name="search"
              type="text"
              placeholder="Search"
              value={searchKey}
            />
          </SearchWrapper>
        </form>
      </div>
    </HeaderTag>
  );
};

const mapStateToProps = (state) => ({
  searchKey: state.blog.searchKey,
});

const mapDispatchToProps = (dispatch) => ({
  searchBlog: (searchKey) => dispatch(searchBlog(searchKey)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
