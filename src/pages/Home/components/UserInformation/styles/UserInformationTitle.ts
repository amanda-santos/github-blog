import styled from "styled-components";

export const UserInformationTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  a {
    color: ${({ theme }) => theme.colors["base-primary"]};
    font-size: 1.2rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    line-height: 0;
    padding-bottom: 0.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors["base-primary"]};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2.4rem;
  }
`;
