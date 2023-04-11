import { SelectProps } from "./types";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const Select = ({ options, label, value, setValue }: SelectProps) => {
  return (
    <Container>
      <S.Label htmlFor={label}>
        <div> {label}</div>
        <S.Select
          value={value}
          onChange={({ target }) => setValue(target.value)}
          id={label}
        >
          <option value="" disabled>
            Selecione
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </S.Select>
      </S.Label>
    </Container>
  );
};
