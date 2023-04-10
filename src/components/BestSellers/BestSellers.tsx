import Link from "next/link";

import { products } from "../../templates/ProductsTemplate/components/ProductsCard/products";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const BestSellers = () => {
  return (
    <>
      <Container>
        <S.Wrapper>
          {products.slice(0, 3).map((item) => (
            <S.CardProduct key={item.id}>
              <S.Name>{item.name}</S.Name>
              <Link href={"produtos/" + item.id}>
                <S.ImageStyle src={item.image} alt={item.alt} />
              </Link>
            </S.CardProduct>
          ))}
        </S.Wrapper>
      </Container>
    </>
  );
};
