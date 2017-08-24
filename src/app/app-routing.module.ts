import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'family', loadChildren: './family/family.module#FamilyModule'},
  {path: 'income-confirmation', loadChildren: './income-confirmation/income-confirmation.module#IncomeConfirmationModule'},
  {path: 'balance-sheet', loadChildren: './balance-sheet/balance-sheet.module#BalanceSheetModule'},
  {path: 'life-event', loadChildren: './life-event/life-event.module#LifeEventModule'},
  {path: 'cash-flow', loadChildren: './cash-flow/cash-flow.module#CashFlowModule'},

  {path: '', redirectTo: 'family',pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
