import styled from "styled-components";

export const UserInformationContainer = styled.div`
  display: flex;
  align-items: fl;
  justify-content: flex-start;
  gap: 3.2rem;

  padding: 3.2rem 4rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors["base-profile"]};

  img {
    width: 14.8rem;
    height: 14.8rem;

    border-radius: 0.8rem;
  }

  h1 {
    margin-bottom: 0.8rem;
    font-size: 2.4rem;
  }

  p {
    margin-bottom: 2.4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;
