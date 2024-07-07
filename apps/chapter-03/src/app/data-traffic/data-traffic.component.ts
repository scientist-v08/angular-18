import { Component, Input } from '@angular/core';
import { DummyDataType } from '../model/dummy-data.model';

@Component({
  selector: 'app-data-traffic',
  templateUrl: './data-traffic.component.html',
  standalone: true,
})
export class DataTrafficComponent {
  @Input({ required: true }) dummyData: DummyDataType[] = [];
  @Input({ required: true }) maxTraffic = 1;
}
