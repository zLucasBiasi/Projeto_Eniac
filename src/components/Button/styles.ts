import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 2rem 6rem;
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.6rem;
    border: none;
    border-radius: 0.6rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-transform: uppercase;

    &:hover {
      transform: translateY(-2px);
    }
  `}
`;
