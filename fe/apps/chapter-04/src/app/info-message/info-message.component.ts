import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-info-message',
  standalone: true,
  imports: [],
  templateUrl: './info-message.component.html',
  styleUrl: './info-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoMessageComponent {
  debug = signal('InfoMessage Component Debug Output');
  get debugOutput() {
    console.log('[InfoMessages] "debugOutput" binding re-evaluated.');
    return this.debug;
  }

  onLog() {
    console.log('Clicked!');
  }
}
