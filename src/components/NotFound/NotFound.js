import React from "react";
import { NotFoundContainer, Wrapper } from "./NotFoundStyle";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";

const NotFound = ({ history }) => {
  return (
    <NotFoundContainer className="container">
      <Wrapper>
        <span className="not-found">404 Not Found</span>
        <Button
          className="not-found-btn"
          variant="contained"
          startIcon={<HomeIcon />}
          size="large"
          onClick={() => history.push("/")}
        >
          Go Back to Home
        </Button>
      </Wrapper>
    </NotFoundContainer>
  );
};

export default NotFound;
