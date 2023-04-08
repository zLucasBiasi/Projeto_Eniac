import {
  Banner,
  InformationCard,
  Title,
  CategoryProductsCard,
} from "@/components";

export const HomeTemplate = () => {
  return (
    <>
      <Banner />
      <InformationCard />
      <Title>Produtos</Title>
      <CategoryProductsCard />
    </>
  );
};
