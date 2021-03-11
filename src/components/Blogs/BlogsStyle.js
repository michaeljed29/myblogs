import styled from "styled-components";
import { lightGray } from "../../styles/colors";

export const BlogsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(32.5rem, auto);
  grid-auto-rows: minmax(32.5rem, auto);

  & {
    grid-column: auto/span 12;
    grid-gap: 2rem;
  }
`;

export const FeedBack = styled.div`
  display: block;
  text-align: center;
  padding: 2rem 0;
  font-size: 2rem;
  color: ${lightGray};
`;
