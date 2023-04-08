import Link from "next/link";

import { products } from "./products";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const CategoryProductsCard = () => {
  return (
    <>
      <Container>
        <S.Wrapper>
          {products.map((item) => (
            <S.CardProduct key={item.id}>
              <S.Name>{item.name}</S.Name>
              <Link href={item.href}>
                <S.ImageStyle src={item.image} alt={item.alt} />
              </Link>
            </S.CardProduct>
          ))}
        </S.Wrapper>
      </Container>
    </>
  );
};
