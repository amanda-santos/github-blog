import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 86.4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 1rem;
  }
`;
