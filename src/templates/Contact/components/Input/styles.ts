import styled, { css } from "styled-components";

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const Rule = styled.span`
  ${({ theme }) => css`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2rem;
    color: ${theme.colors.ligth_gray};
    margin-left: 1.2rem;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 5.6rem;
    padding: 0 1rem;
    border: 0.1rem solid ${theme.colors.backLines};
    outline: none;
    border-radius: 0.8rem;
    margin: 1.6rem 0;
  `}
`;
