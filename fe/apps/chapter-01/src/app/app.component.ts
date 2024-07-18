import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {}
