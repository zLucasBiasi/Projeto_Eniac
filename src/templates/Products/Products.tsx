import { Container } from "@/styles/global";
import { Title } from "@/components";
import { ProductsCard } from "./components";

export const Products = () => {
  return (
    <>
      <Container>
        <Title>Produtos</Title>
        <ProductsCard />
      </Container>
    </>
  );
};
