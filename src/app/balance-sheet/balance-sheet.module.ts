import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //追加

import { BalanceSheetComponent } from './balance-sheet.component';
import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';
import { AssetComponent } from './asset/asset.component';
import { BalanceSheetService } from './balance-sheet.service'; //追加

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BalanceSheetRoutingModule
  ],
  providers: [ BalanceSheetComponent ,BalanceSheetService ], //入れてみた
  declarations: [BalanceSheetComponent, AssetComponent]
})
export class BalanceSheetModule { }
