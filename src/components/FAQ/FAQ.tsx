import { useToggle } from "@/hooks/useToggle";

import { Container } from "../../styles/global";
import Plus from "/public/assets/images/plus.svg";

import { FAQProps } from "./types";

import * as S from "./styles";

export const FAQ = ({ id, title, response }: FAQProps) => {
  const { state, toggle } = useToggle();
  return (
    <Container>
      <S.Card>
        <S.Index>{id}</S.Index>
        <S.DivTexts>
          <S.Title>{title}</S.Title>
        </S.DivTexts>
        <S.Icon
          src={Plus}
          alt="icone de adição para aparecer mais informações"
          isClicked={state}
          onClick={toggle}
        />
        {state && <S.ModalText>{response}</S.ModalText>}
      </S.Card>
    </Container>
  );
};
