import styled from "styled-components";

export const Heading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 1.6rem;

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["base-span"]};
    width: 50%;
    text-align: right;
    line-height: 130%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;

    span {
      text-align: left;
    }
  }
`;
