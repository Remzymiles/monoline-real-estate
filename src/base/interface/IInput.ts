import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";

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
  methods?: UseFormReturn<any, any, undefined>

}
