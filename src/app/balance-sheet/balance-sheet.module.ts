import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceSheetComponent } from './balance-sheet.component';
import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BalanceSheetRoutingModule
  ],
  declarations: [BalanceSheetComponent]
})
export class BalanceSheetModule { }
