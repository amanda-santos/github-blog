import styled from "styled-components";

export const Content = styled.div`
  margin-top: 4rem;
  padding: 0 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h4 {
    margin-top: 1.6rem;
    color: ${({ theme }) => theme.colors["base-primary"]};
    font-weight: 500;
    text-decoration: underline;
  }

  pre {
    max-width: 0;
  }
`;
