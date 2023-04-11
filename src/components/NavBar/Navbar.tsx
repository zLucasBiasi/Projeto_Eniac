import Image from "next/image";

import { Container } from "@/styles/global";

import Hamburguer from "/public/assets/images/hamburguer.svg";
import Close from "/public/assets/images/plus.svg";
import Logo from "/public/assets/images/logo.png";

import { ListIcons, listNav } from "./listNav";

import * as S from "./styles";
import Link from "next/link";
import { useToggle } from "@/hooks/useToggle";

export const Navbar = () => {
  const { state, toggle } = useToggle();

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
              {ListIcons?.map((item, key) => (
                <ul key={key}>
                  <li>
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      onClick={item.onclick}
                    />
                  </li>
                </ul>
              ))}
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
            {ListIcons?.map((item, key) => (
              <ul key={key}>
                <li>
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    onClick={item.onclick}
                  />
                </li>
              </ul>
            ))}
          </S.Wrapper>
          <S.MobileNav>
            <Image
              src={state ? Close : Hamburguer}
              alt="icone de hamburguer para o menu"
              onClick={() => toggle()}
            />
          </S.MobileNav>
        </S.Navbar>
      </Container>
    </S.Header>
  );
};
