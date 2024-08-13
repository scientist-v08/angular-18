import { Route } from '@angular/router';
import {
  AboutComponent,
  ContactComponent,
  HomeComponent,
  HoursComponent,
  MenuComponent,
} from './components/all.components';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];
