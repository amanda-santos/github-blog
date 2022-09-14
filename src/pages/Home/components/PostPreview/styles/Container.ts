import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;

  background-color: ${({ theme }) => theme.colors["base-post"]};
  padding: 3.2rem;
  border-radius: 1rem;

  max-height: 26rem;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  a {
    text-decoration: none;

    &:hover {
      h2 {
        color: ${({ theme }) => theme.colors["base-primary"]};
        text-decoration: underline;
        transition: 0.1s ease-in;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    p {
      -webkit-line-clamp: 3;
    }
  }
`;
