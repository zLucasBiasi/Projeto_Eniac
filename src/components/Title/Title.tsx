import { TitleType } from "./types";
import { Container } from "@/styles/global";

import * as S from "./styles";

export const Title = ({ title }: TitleType) => {
  return (
    <Container>
      <S.Title>{title}</S.Title>
    </Container>
  );
};
