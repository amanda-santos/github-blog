import styled from "styled-components";

export const PostsHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.2rem;
  width: 100%;

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["base-span"]};
  }
`;
