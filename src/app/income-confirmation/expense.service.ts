import { Injectable } from '@angular/core';

import { Expense } from './expense'; //追加

@Injectable()
export class ExpenseService {

  base: Expense; //基本生活費
  residence: Expense; //住居関連費
  vehicle:Expense; //車両費
  education: Expense; //教育費
  insurance: Expense; //保険料
  another: Expense; //その他

  get totalExpenses(): number{ //支出合算
    return this.base.yearly +
           this.residence.yearly +
           this.vehicle.yearly +
           this.education.yearly +
           this.insurance.yearly +
           this.another.yearly;
  }
  constructor() { //コンストラクタ
    this.base = new Expense(0,0);
    this.residence = new Expense(0,0);
    this.vehicle = new Expense(0,0);
    this.education = new Expense(0,0);
    this.insurance = new Expense(0,0);
    this.another = new Expense(0,0);
   }
}
