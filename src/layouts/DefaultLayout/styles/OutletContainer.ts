import styled from "styled-components";

export const OutletContainer = styled.main`
  padding: 9.6rem 0;
  margin: -20rem 3.2rem 0 3.2rem;
  max-width: 86.4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 2.4rem 0;
    margin-top: -14rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2.4rem 0;
  }
`;
