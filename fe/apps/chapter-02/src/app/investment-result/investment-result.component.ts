import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AnnualDataInterface } from "../models/annual-data.model";

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent implements OnChanges {

  showTable = false;
  @Input() annualData: AnnualDataInterface[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (this.annualData.length > 0) {
        this.showTable = true;
      } else {
        this.showTable = false;
      }
    }
  }

}
