import { TitleType } from "./types";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const Title = ({ children }: TitleType) => {
  return (
    <Container>
      <S.Title>{children}</S.Title>
      <S.BackLine />
    </Container>
  );
};
