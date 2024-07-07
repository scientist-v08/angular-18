import { Component } from '@angular/core';
import { InputFormValuesInterface } from './models/input-form.model';
import { AnnualDataInterface } from './models/annual-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  data: AnnualDataInterface[] = [];

  calculateInvestmentResults(event: InputFormValuesInterface): void {
    const annualData: AnnualDataInterface[] = [];
    let investmentValue = event.initial;

    for (let i = 0; i < event.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (event.expectedReturn / 100);
      investmentValue += interestEarnedInYear + event.annual;
      const totalInterest =
        investmentValue - event.annual * year - event.initial;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: event.annual,
        totalInterest: totalInterest,
        totalAmountInvested: event.initial + event.annual * year,
      });
    }

    this.data = annualData;
  }

}
