import styled, { css } from "styled-components";
export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.red};
    margin-top: 10rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${theme.colors.white};
    height: 3rem;
  `}
`;
