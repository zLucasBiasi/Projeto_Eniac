import Image from "next/image";
import { useState } from "react";

import { Container } from "@/styles/global";

import Hamburguer from "/public/assets/images/hamburguer.svg";
import Close from "/public/assets/images/plus.svg";
import Logo from "/public/assets/images/logo.png";

import CartIcon from "/public/assets/images/iconCart.svg";

import { listNav } from "./listNav";

import * as S from "./styles";
import Link from "next/link";
import { useToggle } from "@/hooks/useToggle";
import { Cart } from "../Cart";

export const Navbar = () => {
  const { state, toggle } = useToggle();
  const [cartActive, setCartActive] = useState(false);

  const toggleCart = () => {
    setCartActive(!cartActive);
  };

  return (
    <S.Header>
      <Container>
        <S.Navbar>
          <S.LogoContainer>
            <Link href="/">
              <S.Logo src={Logo} alt="Logo da empresa" />
            </Link>
          </S.LogoContainer>

          <S.MenuMobile active={state}>
            {listNav?.map((item, key) => (
              <ul key={key}>
                <li>
                  <S.LinkStyle href={item.link}>{item.category}</S.LinkStyle>
                </li>
              </ul>
            ))}
            <S.Flex>
              <ul>
                <S.ListIcons>
                  <Image
                    src={CartIcon}
                    alt=""
                    onClick={() => {
                      setCartActive(!cartActive);
                      toggle();
                    }}
                  />
                </S.ListIcons>
              </ul>
            </S.Flex>
          </S.MenuMobile>

          <S.Wrapper>
            {listNav?.map((item, key) => (
              <ul key={key}>
                <li>
                  <S.LinkStyle href={item.link}>{item.category}</S.LinkStyle>
                </li>
              </ul>
            ))}
          </S.Wrapper>
          <S.Wrapper>
            <ul>
              <S.ListIcons>
                <Image src={CartIcon} alt="" onClick={toggleCart} />
              </S.ListIcons>
            </ul>
          </S.Wrapper>
          <S.MobileNav>
            <Image
              src={state ? Close : Hamburguer}
              alt="icone de hamburguer para o menu"
              onClick={() => {
                toggle();
                setCartActive(false);
              }}
            />
          </S.MobileNav>

          <Cart active={cartActive} setCartActive={setCartActive} />
        </S.Navbar>
      </Container>
    </S.Header>
  );
};
