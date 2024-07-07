import { Component } from '@angular/core';
import { DummyData } from './data/dummy-data';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { DataTrafficComponent } from './data-traffic/data-traffic.component';
import { SupportTicketComponent } from './support-tickets/support-tickets.component';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    DataTrafficComponent,
    SupportTicketComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  dummyData = DummyData;
  maxTraffic = Math.max(...this.dummyData.map((data) => data.value));
  currentStatus = 'online';
}
