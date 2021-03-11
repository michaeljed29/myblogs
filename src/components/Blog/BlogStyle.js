import styled from "styled-components";
import {
  lightGray,
  gray,
  primaryColor,
  darkPrimary,
} from "../../styles/colors";

export const BlogContainer = styled.div`
  background: #fafafa;
  padding: 3rem;
  border-radius: 3px;
  min-height: 3.25rem;
  position: relative;
  display: flex;
  flex-direction: column;

  .icon-like-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;

    .icon {
      font-size: 2.4rem;
    }
  }
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: normal;
`;

export const Description = styled.p`
  color: ${gray};
`;

export const Date = styled.span`
  display: block;
  color: ${lightGray};
  font-size: 1.3rem;
  margin: 1rem 0 2.6rem;
  font-weight: bold;
`;

export const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const SeeMore = styled.div`
  color: ${primaryColor};
  cursor: pointer;
  font-size: 1.6rem;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${darkPrimary};
  }
`;

export const ActionButtons = styled.div`
  .icon {
    font-size: 2.4rem;

    .icon-btn-edit {
      color: #4791db;
    }

    & .icon-edit {
      color: #4791db;
      /* margin-right: 1rem; */
    }

    & .icon-delete {
      color: #e57373;
    }
  }
`;
