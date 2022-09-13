import styled from "styled-components";

export const OutletContainer = styled.main`
  padding: 9.6rem 0;
  margin: -20rem 4.8rem 0 4.8rem;
  max-width: 86.4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 2.4rem 0;
    margin-top: -14rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2.4rem 0;
  }
`;
