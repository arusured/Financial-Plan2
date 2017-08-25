import { Component, OnInit, ViewChild} from '@angular/core'; //追加

import { IncomeComponent } from './income/income.component'; //追加
import { ExpenseComponent } from './expense/expense.component'; //追加

@Component({
  selector: 'fp-income-confirmation',
  templateUrl: './income-confirmation.component.html',
  styleUrls: ['./income-confirmation.component.css']
})
export class IncomeConfirmationComponent implements OnInit {

  //合算用の変数宣言
  @ViewChild(IncomeComponent)
  incomeComponent: IncomeComponent;

  //合算用の変数宣言
  @ViewChild(ExpenseComponent)
  expenseComponent: ExpenseComponent;

  constructor() { }

  ngOnInit() {
  }

  calcSaving(): number { //収入ー支出を計算
    return this.incomeComponent.calcTotalAfterTaxIncome() - this.expenseComponent.calcTotalExpenses();
  }
}
