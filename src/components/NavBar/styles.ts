import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

type MenuMobileProps = {
  active: boolean;
};

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 10rem;
    background-color: ${theme.colors.background};
    display: flex;
    align-items: center;
  `}
`;

export const LogoContainer = styled.div`
  margin-right: 4rem;
`;

export const Logo = styled(Image)`
  width: 8rem;
  height: 8rem;
  @media (max-width: 800px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const MenuMobile = styled.div<MenuMobileProps>`
  ${({ theme, active }) => css`
    opacity: ${active ? "1" : "0"};
    display: ${active ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    border-radius: 0.4rem;
    background: ${theme.colors.red};
    box-shadow: 0.1rem -0.1rem 1rem -0.1rem ${theme.colors.gray_input};
    width: 80%;
    height: 30rem;
    z-index: 2;
    position: absolute;
    top: 8rem;
    right: 1.5rem;
    transition: 0.3s ease;
  `}
`;
export const Flex = styled.div`
  display: flex;
  gap: 2rem;
  filter: invert();
  cursor: pointer;
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
    @media (max-width: 800px) {
      color: ${theme.colors.white};
    }
  `}
`;

export const ListIcons = styled.li`
  display: flex;
  gap: 3rem;
  cursor: pointer;
`;
