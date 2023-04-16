import Link from "next/link";

import { products } from "./products";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const ProductsCard = () => {
  return (
    <Container>
      <S.Wrapper>
        {products.map((item) => (
          <Link href={"produtos/" + item.id} key={item.id}>
            <S.CardProduct>
              <S.Name>{item.name}</S.Name>
              <S.ImageStyle src={item.image} alt={item.alt} />
              <S.Value>R$: {item.value}</S.Value>
            </S.CardProduct>
          </Link>
        ))}
      </S.Wrapper>
    </Container>
  );
};
