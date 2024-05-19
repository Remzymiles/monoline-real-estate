import { ChangeEvent } from "react";

export interface IInput {
  inputType: string;
  placeholder: string;
  id: string;
  htmlFor: string;
  nameOfInput: string;
  name: string;
  register: any;
  extraStyle: string;
  value?: string;
  onChange?: (e: string | ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  disabled?: boolean
}
