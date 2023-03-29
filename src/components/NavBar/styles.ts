import Link from "next/link";
import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 8rem;
    background-color: ${theme.colors.background};
    display: flex;
    align-items: center;
  `}
`;

export const Logo = styled.h1`
  margin-right: 4rem;
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Items = styled.li`
  cursor: pointer;
`;

export const LinkStyle = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  `}
`;