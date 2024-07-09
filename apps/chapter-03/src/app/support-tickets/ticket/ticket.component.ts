import { Component, Input } from "@angular/core";
import { Ticket } from "../../model/ticket.model";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
  standalone: true
})
export class TicketComponent {

  @Input({ required: true }) tickets: Ticket[] = [];

  markAsCompleted(id: number): void {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'ticket-closed' }
      }
      return ticket;
    });
  }

}
