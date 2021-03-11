import styled from "styled-components";
import { primaryColor, dirtyWhite, lightPrimary } from "../../styles/colors";
import { logoFont } from "../../styles/fonts";

export const Header = styled.header`
  height: 9rem;
  background: ${primaryColor};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
  }
`;

export const Logo = styled.span`
  background: ${primaryColor};
  font-family: ${logoFont};
  color: ${dirtyWhite};
  font-size: 3.5rem;
`;

export const SearchWrapper = styled.div`
  position: relative;

  .search-icon {
    position: absolute;
    top: 50%;
    left: 11px;
    transform: translateY(-50%);
    font-size: 2.3rem;
    color: ${dirtyWhite};
  }
`;

export const Search = styled.input`
  background: ${lightPrimary};
  border-radius: 2rem;
  height: 3.5rem;
  width: 23.7rem;
  padding: 2rem;
  color: ${dirtyWhite};
  padding-left: 4rem;

  &::placeholder {
    color: #e0d6f6;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #e0d6f6 !important;
  }
`;
