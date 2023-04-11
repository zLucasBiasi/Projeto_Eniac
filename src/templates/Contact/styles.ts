import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const ContainerButton = styled.div`
  margin: 4.8rem 0 11.6rem 0;
  display: flex;
  justify-content: center;
`;

export const LinkHome = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-size: 2rem;
  `}
`;
