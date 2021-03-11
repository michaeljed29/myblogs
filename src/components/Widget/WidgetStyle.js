import styled from "styled-components";
import {
  primaryColor,
  dirtyWhite,
  darkPrimary,
  darkGray,
} from "../../styles/colors";

export const WidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem !important;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Sort = styled.div`
  margin: 0 2rem;
  font-size: 1.3rem;
  color: ${darkGray};
  display: flex;
  align-items: center;

  span {
    display: flex;
    margin: 0 1rem;
    align-items: center;

    &:first-child {
      font-weight: bold;
    }

    &.sort-btn {
      cursor: pointer;
      width: 3rem;
      user-select: none;
    }
  }
`;
