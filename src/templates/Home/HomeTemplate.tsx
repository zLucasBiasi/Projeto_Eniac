import {
  Banner,
  InformationCard,
  Navbar,
  Title,
  ProductsCard,
} from "@/components";

export const HomeTemplate = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <InformationCard />
      <Title>Produtos</Title>
      <ProductsCard />
    </>
  );
};
