import { InputProps } from "./types";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const Input = ({ label, type, rule, ...props }: InputProps) => {
  return (
    <Container>
      <S.Label htmlFor={label}>
        <div>
          {label} {rule && <S.Rule>({rule})</S.Rule>}
        </div>
        <S.Input type={type} id={label} {...props} />
      </S.Label>
    </Container>
  );
};
