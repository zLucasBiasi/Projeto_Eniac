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
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0 2rem;
    width: 32rem;
    height: 12rem;
    background: ${theme.colors.white};
    box-shadow: 0.1rem 0.1rem 0.6rem ${theme.colors.boxShadow};
    border-radius: 0.4rem;
  `}
`;

export const Text = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
`;
