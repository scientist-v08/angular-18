import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  standalone: true,
})
export class ServerStatusComponent {
  @Input({ required: true }) currentStatus = '';
}
