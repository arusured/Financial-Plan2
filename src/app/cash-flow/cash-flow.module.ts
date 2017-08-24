import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashFlowComponent } from './cash-flow.component';
import { CashFlowRoutingModule } from './cash-flow-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CashFlowRoutingModule
  ],
  declarations: [CashFlowComponent]
})
export class CashFlowModule { }
