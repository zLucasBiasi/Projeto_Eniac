import Link from "next/link";

import { products } from "./products";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const ProductsCard = () => {
  return (
    <Container>
      <S.Wrapper>
        {products.map((item) => (
          <S.CardProduct key={item.id}>
            <S.Name>{item.name}</S.Name>
            <div>
              <Link href={"produtos/" + item.id}>
                <S.ImageStyle src={item.image} alt={item.alt} />
              </Link>
              <S.Value>R$: {item.value}</S.Value>
            </div>
          </S.CardProduct>
        ))}
      </S.Wrapper>
    </Container>
  );
};
