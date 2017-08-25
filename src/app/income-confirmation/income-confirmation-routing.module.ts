import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeConfirmationComponent } from './income-confirmation.component';

const routes: Routes = [
  { path: '',component: IncomeConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeConfirmationRoutingModule { }
