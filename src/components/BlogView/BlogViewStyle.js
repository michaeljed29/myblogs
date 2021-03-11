import styled from "styled-components";
import {
  lightGray,
  gray,
  primaryColor,
  darkPrimary,
} from "../../styles/colors";
import { Link } from "react-router-dom";

export const BlogViewContainer = styled.div`
  position: relative;
`;

export const TitleWrapper = styled.h3`
  display: flex;
  align-items: center;

  .icon-like-btn {
    .icon {
      font-size: 3rem;
    }
  }
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: normal;
  margin-right: 1rem;
`;

export const Content = styled.p`
  color: ${gray};
`;

export const Date = styled.span`
  display: block;
  color: ${lightGray};
  font-size: 1.3rem;
  margin: 0rem 0 2.6rem;
  font-weight: bold;
`;

export const Back = styled(Link)`
  color: ${primaryColor};
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  margin-top: 4rem;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${darkPrimary};
  }
`;
