import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 5rem;
  margin-bottom: 5rem;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const CardProduct = styled.div`
  width: 20rem;

  @media (max-width: 510px) {
    width: 100%;
  }
`;

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: 1.7rem;
    font-weight: 600;
    height: 6rem;
    color: ${theme.colors.purple};
  `}
`;

export const Value = styled.span`
  ${({ theme }) => css`
    font-size: 1.8rem;

    font-weight: 600;
    color: ${theme.colors.purple};
  `}
`;

export const ImageStyle = styled(Image)`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  cursor: pointer;
  border-radius: 1rem;
`;
