import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MesageService } from '../message.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {

  private messageService = inject(MesageService);
  messages = this.messageService.allMessages;
  debug = signal('MessagesList Component Debug Output');

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return this.debug;
  }
}
