import styled from "styled-components";

export const Heading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 1.6rem;
  margin-bottom: 1.2rem;

  a {
    color: ${({ theme }) => theme.colors["base-primary"]};
    font-size: 1.2rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    line-height: 0;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors["base-primary"]};
    }
  }
`;
