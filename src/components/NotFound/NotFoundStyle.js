import styled from "styled-components";
import {
  primaryColor,
  dirtyWhite,
  darkPrimary,
  lightGray,
} from "../../styles/colors";

export const NotFoundContainer = styled.div`
  display: flex;
  min-height: 40rem;
  align-items: center;
  justify-content: center;

  .not-found {
    display: block;
    color: ${lightGray};
    font-size: 7rem;
    margin-bottom: 2rem;
  }

  .not-found-btn {
    color: ${dirtyWhite};
    background: ${primaryColor};
    font-size: 1.6rem;
    margin: 0 auto;
  }

  .not-found-btn:hover {
    background: ${darkPrimary};
  }
`;

export const Wrapper = styled.div`
  text-align: center;
`;
