import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 3.4rem;
    color: ${theme.colors.purple};
    margin-top: 6.4rem;
  `}
`;

export const BackLine = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    height: 0.1rem;
    border: none;
    background-color: ${theme.colors.backLines};
    margin: 1.6rem 0;
  `}
`;
