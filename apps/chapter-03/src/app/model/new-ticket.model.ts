import { FormControl } from "@angular/forms";

export interface NewTicketFormInterface {
  title: FormControl<string | null>;
  request: FormControl<string | null>;
}

export interface NewTicketInterface {
  title: string | null;
  request: string | null;
}
