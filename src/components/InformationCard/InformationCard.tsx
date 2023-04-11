import { Container } from "@/styles/global";
import Image from "next/image";

import { Informations } from "./Informations";

import * as S from "./styles";

export const InformationCard = () => {
  return (
    <Container>
      <S.ContainerCards>
        {Informations.map((item, key) => (
          <S.Card key={key}>
            <Image src={item.logo} alt={item.alt} />
            <S.Text>{item.text}</S.Text>
          </S.Card>
        ))}
      </S.ContainerCards>
    </Container>
  );
};
