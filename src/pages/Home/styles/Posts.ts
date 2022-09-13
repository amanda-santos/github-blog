import styled from "styled-components";

export const Posts = styled.div`
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;
