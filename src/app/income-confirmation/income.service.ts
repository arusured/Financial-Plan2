import { Injectable } from '@angular/core';

import { Income } from './income'; //Incomeクラスを使用

@Injectable()
export class IncomeService {

  husband: Income; //夫宣言
  wife: Income; //妻宣言

  get totalAfterTaxIncome(): number {
    return this.husband.afterTaxIncome + this.wife.afterTaxIncome; //夫と妻の手取り合算
  }
  constructor() { 
    this.husband = new Income(0,0,0,0); //夫インスタンス生成
    this.wife = new Income(0,0,0,0) //妻インスタンス生成
  }
}
