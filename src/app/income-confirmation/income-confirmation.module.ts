import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeConfirmationComponent } from './income-confirmation.component';
import { IncomeConfirmationRoutingModule } from './income-confirmation-routing.module';
import { IncomeComponent } from './income/income.component';

@NgModule({
  imports: [
    CommonModule,
    IncomeConfirmationRoutingModule
  ],
  declarations: [IncomeConfirmationComponent, IncomeComponent]
})
export class IncomeConfirmationModule { }
