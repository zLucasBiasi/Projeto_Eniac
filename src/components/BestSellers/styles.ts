import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 6rem;
  margin-bottom: 10rem;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const Name = styled.span`
  ${({ theme }) => css`
    width: 100%;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${theme.colors.purple};
  `}
`;

export const CardProduct = styled.div`
  width: 30rem;
  height: 40rem;
`;
export const ImageStyle = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  cursor: pointer;
`;
