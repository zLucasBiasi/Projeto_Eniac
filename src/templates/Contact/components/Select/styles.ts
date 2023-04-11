import styled, { css } from "styled-components";

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const Select = styled.select`
  ${({ theme }) => css`
    width: 100%;
    height: 5.6rem;
    padding: 0 1rem;
    border: 0.1rem solid ${theme.colors.backLines};
    outline: none;
    border-radius: 0.8rem;
    margin: 1.6rem 0;
    background-color: transparent;
  `}
`;
