import { Component, inject, output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { InputFormInterface, InputFormValuesInterface } from "../models/input-form.model";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  fb = inject(FormBuilder);
  investmentForm: FormGroup<InputFormInterface> = this.formInit();
  inputValues = output<InputFormValuesInterface>();

  private formInit(): FormGroup<InputFormInterface> {
    return this.fb.group<InputFormInterface>({
      initial: this.fb.control(0, { nonNullable: true }),
      annual: this.fb.control<number>(0, { nonNullable: true }),
      expectedReturn: this.fb.control(0, { nonNullable: true }),
      duration: this.fb.control(0, { nonNullable: true })
    });
  }

  onSubmit(): void {
    this.inputValues.emit(this.investmentForm.getRawValue());
    this.investmentForm.setValue({
      initial: 0,
      annual: 0,
      expectedReturn: 0,
      duration: 0
    });
  }

}
