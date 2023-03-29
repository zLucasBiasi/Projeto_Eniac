import Image from "next/image";

import styled, { css } from "styled-components";

type IsClickedProps = {
  isClicked: boolean;
};

export const Card = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 5rem 4rem;
    background-color: ${theme.colors.gray};
  `}
`;

export const Index = styled.span`
  ${({ theme }) => css`
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 5.8rem;
    letter-spacing: 0.025rem;
    color: ${theme.colors.grayFaq};

    @media (max-width: 1000px) {
      font-size: 4rem;
    } ;
  `}
`;

export const DivTexts = styled.div`
  width: 80%;
`;

export const Title = styled.h2`
  @media (max-width: 1000px) {
    font-size: 2.2rem;
    font-weight: 600;
  } ;
`;

export const Icon = styled(Image)<IsClickedProps>`
  ${({ theme, isClicked }) => css`
    padding: 0.5rem;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    transform: ${isClicked ? "rotate(45deg)" : "rotate(0)"};
    filter: drop-shadow(0.1rem 0.1rem 0.2rem ${theme.colors.grayBorderFaq});
    cursor: pointer;
  `}
`;

export const ModalText = styled.span`
  ${({ theme }) => css`
    padding: 1rem 0;
    width: 80%;
    margin: auto;
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 2.8rem;
    color: ${theme.colors.grayFaq};
  `}
`;
