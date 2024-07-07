import { FormControl } from "@angular/forms";

export interface InputFormInterface {
  initial: FormControl<number>;
  annual: FormControl<number>;
  expectedReturn: FormControl<number>;
  duration: FormControl<number>;
}

export interface InputFormValuesInterface {
  initial: number;
  annual: number;
  expectedReturn: number;
  duration: number;
}
