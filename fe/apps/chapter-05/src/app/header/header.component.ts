import { UpperCasePipe } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  standalone: true,
  imports: [UpperCasePipe],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  title = signal('Signal store');
}
