import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserInputComponent, InvestmentResultComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
