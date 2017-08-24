import { Component, OnInit } from '@angular/core';

import { IncomeService } from '../income.service'; //IncomeServiceを使用

import { Income } from '../income'; //Income型を使用

@Component({
  selector: 'fp-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  private husband: Income; //夫のIncome型宣言
  private wife: Income; //妻のIncome型宣言

  constructor(private incomeService: IncomeService) { }//コンストラクタ

  ngOnInit() {
    this.husband = this.incomeService.husband; //husbandにserviceで計算したものを格納
    this.wife = this.incomeService.wife; //husbandにserviceで計算したものを格納
  }

  calcTotalAfterTaxIncome(){
    return this.incomeService.totalAfterTaxIncome; //諸税を差し引いた手取りを返却
  }
}
