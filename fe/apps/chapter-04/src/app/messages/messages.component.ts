import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {
  debug = signal('Messages Component Debug Output');
  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return this.debug;
  }
}
