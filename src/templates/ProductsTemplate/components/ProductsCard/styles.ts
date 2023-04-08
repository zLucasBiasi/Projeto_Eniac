import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 10rem;
  margin-bottom: 10rem;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const Name = styled.span`
  ${({ theme }) => css`
    font-size: 1.7rem;
    font-weight: 600;
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

export const CardProduct = styled.div`
  width: 20rem;
  height: 30rem;
  @media (max-width: 510px) {
    width: 100%;
  }
`;
export const ImageStyle = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  cursor: pointer;
`;
