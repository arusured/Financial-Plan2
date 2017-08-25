import { Component, OnInit } from '@angular/core';

import { ExpenseService } from '../expense.service'; //追加
import { Expense} from '../expense'; //追加

@Component({
  selector: 'fp-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  //変数宣言
  private base:Expense;
  private residence: Expense;
  private vehicle: Expense;
  private education: Expense;
  private insurance: Expense;
  private another: Expense;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() { //初期化
    this.base = this.expenseService.base;
    this.residence = this.expenseService.residence;
    this.vehicle = this.expenseService.vehicle;
    this.education = this.expenseService.education;
    this.insurance = this.expenseService.insurance;
    this.another = this.expenseService.another;
  }

  calcTotalExpenses(): number {//合算メソッド呼出し
    return this.expenseService.totalExpenses;
  }
}
