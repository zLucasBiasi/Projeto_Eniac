import styled, { css } from "styled-components";
import Image from "next/image";
type CartProps = {
  active: boolean;
};

export const Cart = styled.div<CartProps>`
  ${({ theme, active }) => css`
    opacity: ${active ? "1" : "0"};
    display: ${active ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    border-radius: 0.4rem;
    background: ${theme.colors.white};
    box-shadow: 0.1rem -0.1rem 1rem -0.1rem ${theme.colors.gray_input};
    width: 30rem;
    height: auto;
    max-height: 50rem;
    overflow-y: scroll;
    z-index: 2;
    position: absolute;
    top: 8rem;
    right: 3rem;
    transition: 0.3s ease;

    @media (min-width: 1300px) {
      margin-right: 33rem;
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const ImageStyle = styled(Image)`
  width: 5rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const Informations = styled.p`
  font-size: 1.3rem;
  width: 19rem;
`;
export const Button = styled.button`
  ${({ theme }) => css`
    padding: 0.3rem 0.6rem;
    border-radius: 0.3rem;
    font-size: 1.4rem;
    border: none;
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
  `}
`;

export const Close = styled.button`
  ${({ theme }) => css`
    padding: 0.3rem 0.6rem;
    border-radius: 0.3rem;
    font-size: 1.4rem;
    border: none;
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
    position: absolute;
    right: 0;
    top: 0.5rem;
  `}
`;
