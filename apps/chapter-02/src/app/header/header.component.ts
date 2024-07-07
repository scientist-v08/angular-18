import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: `
    header {
      text-align: center;
      margin: 3rem auto;
    }

    header img {
      width: 5rem;
      height: 5rem;
      object-fit: contain;
      background-color: transparent;
    }

    header h1 {
      font-size: 1.5rem;
    }
  `
})
export class HeaderComponent {}
