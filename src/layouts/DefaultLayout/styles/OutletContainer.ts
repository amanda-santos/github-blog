import styled from "styled-components";

export const OutletContainer = styled.main`
  margin-top: -20rem;
  padding: 9.6rem 16.8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 2.4rem 6.4rem;
    margin-top: -14rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2.4rem 3.2rem;
  }
`;
