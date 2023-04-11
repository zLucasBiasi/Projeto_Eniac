import { SetStateAction } from "react";

export type SelectProps = {
  label: string;
  options: string[];
  value: string;
  setValue: (option: SetStateAction<string>) => void;
};
