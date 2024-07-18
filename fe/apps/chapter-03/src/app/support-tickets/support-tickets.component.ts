import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketComponent } from "./ticket/ticket.component";
import { Ticket } from '../model/ticket.model';
import { NewTicketInterface } from '../model/new-ticket.model';

@Component({
    selector: 'app-support-ticket',
    templateUrl: './support-tickets.component.html',
    styles: `
    div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    @media (min-width: 768px) {
      div {
        flex-direction: row;
      }
      article:first-child {
        max-width: 40%;
        overflow: hidden;
      }
      article:second-child {
        max-width: 60%;
        overflow: hidden;
      }
    }
    `,
    standalone: true,
    imports: [NewTicketComponent, TicketComponent]
})
export class SupportTicketComponent {

  tickets: Ticket[] = [];

  newTicket(data: NewTicketInterface): void {
    const ticket: Ticket = {
      title: data.title,
      request: data.request,
      id: Math.random(),
      status: 'ticket-open'
    }
    this.tickets.push(ticket);
  }

}
