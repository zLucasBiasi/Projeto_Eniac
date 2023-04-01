import styled, { css } from "styled-components";

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    padding: 0 2rem;
    height: 12rem;
    width: 100%;
    background: ${theme.colors.white};
    box-shadow: 0.1rem 0.1rem 0.6rem ${theme.colors.boxShadow};
    border-radius: 0.4rem;

    @media (min-width: 800px) {
      width: 32rem;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const Text = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
`;
