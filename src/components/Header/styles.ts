import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10rem;
  width: 100vw;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors["base-input"]};

  display: flex;
  align-items: flex-end;
  justify-content: center;

  padding: 16rem;
`;
