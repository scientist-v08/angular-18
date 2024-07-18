import { Component, signal } from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CounterComponent, MessagesComponent],
})
export class AppComponent {
  debug = signal('AppComponent Component Debug Output');
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return this.debug;
  }
}
