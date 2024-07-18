import { Component, inject, output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NewTicketFormInterface, NewTicketInterface } from "../../model/new-ticket.model";

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class NewTicketComponent {

  fb = inject(FormBuilder);
  newTicketForm: FormGroup<NewTicketFormInterface> = this.formInit();
  enteredTicket = output<NewTicketInterface>();

  private formInit(): FormGroup<NewTicketFormInterface> {
    return this.fb.group<NewTicketFormInterface>({
      title: new FormControl<string>('', [Validators.required]),
      request: new FormControl<string>('', [Validators.required])
    });
  }

  onSubmit(): void {
    this.enteredTicket.emit(this.newTicketForm.getRawValue());
    this.newTicketForm.reset();
  }

}
