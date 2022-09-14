import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin-top: 4rem;
  padding: 0 3.2rem;

  h4 {
    margin-top: 1.6rem;
    color: ${({ theme }) => theme.colors["base-primary"]};
    font-weight: 500;
    text-decoration: underline;
  }
`;
