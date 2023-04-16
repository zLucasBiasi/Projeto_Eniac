import { TextareaProps } from "./types";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const Textarea = ({ label, value, onChange }: TextareaProps) => {
  return (
    <Container>
      <S.Label htmlFor={label}>
        {label}
        <S.Textarea id={label} value={value} onChange={onChange} />
      </S.Label>
    </Container>
  );
};
