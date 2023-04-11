import { Button } from "@/components";
import { Container } from "@/styles/global";
import { products } from "@/templates/Products/components/ProductsCard/products";
import { GetServerSideProps } from "next";

import * as S from "./styles";

const buyProducts = ({ products, message }: any) => {
  if (message) {
    return <h1>{message}</h1>;
  }
  return (
    <Container>
      <S.Wrapper>
        <S.ImageStyle src={products[0].image} alt={products[0].alt} />
        <S.WrapperInformation>
          <S.Name>{products[0].name}</S.Name>
          <p>{products[0].description}</p>
          <S.Value>R$:{products[0].value}</S.Value>
          <Button>COLOCAR NO CARRINHO</Button>
        </S.WrapperInformation>
      </S.Wrapper>
    </Container>
  );
};

export default buyProducts;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id }: any = ctx.params;

  const product = products.filter((item) => item.id == id);
  if (product.length == 0) {
    return { props: { message: "esse produto não existe ainda" } };
  }

  return { props: { products: product } };
};
