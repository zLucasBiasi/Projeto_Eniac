import { ButtonProps } from "./types";

import * as S from "./styles";

export const Button = ({ children, ...rest }: ButtonProps) => (
  <S.Button {...rest}>{children}</S.Button>
);
