import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MesageService } from '../message.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMessageComponent {
  private messageService = inject(MesageService);
  enteredText = signal('');
  debug = signal('NewMessage Component Debug Output');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return this.debug;
  }

  onSubmit() {
    this.messageService.addMessage(this.enteredText());
    this.enteredText.set('');
  }
}
