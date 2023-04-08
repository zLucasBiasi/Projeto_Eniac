import { Container } from "@/styles/global";
import { Title } from "@/components";
import { ProductsCard } from "./components";

export const ProductsTemplate = () => {
  return (
    <>
      <Container>
        <Title>Produtos</Title>
        <ProductsCard />
      </Container>
    </>
  );
};
