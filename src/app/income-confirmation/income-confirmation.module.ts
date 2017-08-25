import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //追加してみた。

import { IncomeConfirmationComponent } from './income-confirmation.component';
import { IncomeConfirmationRoutingModule } from './income-confirmation-routing.module';
import { IncomeComponent } from './income/income.component';
import { IncomeService } from './income.service';
import { ExpenseComponent } from './expense/expense.component'; //追加してみた。
import { ExpenseService } from './expense.service'; //追加してみた。

@NgModule({
  imports: [
    CommonModule,
    FormsModule, //追加してみた。
    IncomeConfirmationRoutingModule
  ],
  providers: [IncomeService,ExpenseService], //追加してみた。
  declarations: [IncomeConfirmationComponent, IncomeComponent, ExpenseComponent]
})
export class IncomeConfirmationModule { }
