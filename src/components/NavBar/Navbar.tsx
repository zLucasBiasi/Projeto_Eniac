import Image from "next/image";

import { Container } from "@/styles/global";

import Hamburguer from "/public/assets/images/hamburguer.svg";
import Logo from "/public/assets/images/logo.png";

import { ListIcons, listNav } from "./listNav";

import * as S from "./styles";
import Link from "next/link";

export const Navbar = () => {
  return (
    <S.Header>
      <Container>
        <S.Navbar>
          <S.LogoContainer>
            <Link href="/">
              <S.Logo src={Logo} alt="Logo da empresa" />
            </Link>
          </S.LogoContainer>
          <S.Wrapper>
            {listNav?.map((item, key) => (
              <ul key={key}>
                <li>
                  <S.LinkStyle
                    href={item.link}
                    dangerouslySetInnerHTML={{ __html: item.category }}
                  />
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
            {/* <S.CallLink href="https://wa.me" target="_blank" rel="noreferrer">
              (11) 4804-5032
            </S.CallLink> */}
          </S.Wrapper>
          <S.MobileNav>
            <Image src={Hamburguer} alt="icone de hamburguer para o menu" />
          </S.MobileNav>
        </S.Navbar>
      </Container>
    </S.Header>
  );
};
