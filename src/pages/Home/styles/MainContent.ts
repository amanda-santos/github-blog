import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 7.2rem;
  width: 100%;

  input {
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 1.6rem;

    color: ${({ theme }) => theme.colors["base-text"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    border-radius: 0.6rem;

    font-size: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }
`;
