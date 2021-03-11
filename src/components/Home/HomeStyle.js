import styled from "styled-components";
import { darkPrimary } from "../../styles/colors";

export const HomeSection = styled.section`
  .MuiTypography-h6 {
    font-size: 3rem !important;
  }
`;

export const HomeContainer = styled.div`
  min-height: calc(100vh - 25rem);
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: auto !important;
`;

export const SearchInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  p {
    font-size: 2rem;

    margin-right: 2rem;

    span {
      color: ${darkPrimary};
      font-weight: bold;
    }
  }
`;
