import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  width: 100%;

  background-color: ${({ theme }) => theme.colors["base-profile"]};
  padding: 3.2rem;
  border-radius: 1rem;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors["base-title"]};
  }
`;
