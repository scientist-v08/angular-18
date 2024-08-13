import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  clicked = false;
  showMenu(): void {
    this.clicked = !this.clicked;
  }
  classSelector(): string {
    return this.clicked ? '' : 'header__nav';
  }
}
