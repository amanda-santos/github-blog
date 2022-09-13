import styled from "styled-components";

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["base-span"]};
  }
`;
