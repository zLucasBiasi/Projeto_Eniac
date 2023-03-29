import Image from "next/image";
import Link from "next/link";

import { Container } from "@/styles/global";
import Hamburguer from "/public/assets/images/hamburguer.svg";

import { ListIcons, listNav } from "./listNav";

import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Header>
      <Container>
        <S.Navbar>
          <S.Logo>LOGO</S.Logo>
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
                <S.Items>
                  {item.link ? (
                    <Link href={item.link}>
                      <Image src={item.icon} alt={item.alt} />
                    </Link>
                  ) : (
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      onClick={item.onclick}
                    />
                  )}
                </S.Items>
              </ul>
            ))}
          </S.Wrapper>
          <S.MobileNav>
            <Image src={Hamburguer} alt="icone de hamburguer para o menu" />
          </S.MobileNav>
        </S.Navbar>
      </Container>
    </S.Header>
  );
};
