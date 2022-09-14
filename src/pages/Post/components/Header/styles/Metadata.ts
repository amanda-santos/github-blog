import styled from "styled-components";

export const Metadata = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.4rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.colors["base-span"]};

    svg {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
`;
