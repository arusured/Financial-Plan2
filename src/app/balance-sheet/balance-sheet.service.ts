import { Injectable } from '@angular/core';
import { BalanceSheetItem } from './balance-sheet-item'; //追加
import { ASSETS } from './mock-assets'; //追加

@Injectable()
export class BalanceSheetService {

  constructor() { }

  getAssets(): Promise<BalanceSheetItem[]>{ //Promiseとは、非同期処理用のAPI。BalanceSheetItemの配列取得を待たない。
    return Promise.resolve(ASSETS); //取得が終わったら完了になる。
  }

  getMoneyTotal(items: BalanceSheetItem[]): number { //資産の合算
    let sum = 0; //変数準備＆初期化
    items.forEach((item: BalanceSheetItem) => { //forEach　各要素の取り出し関数
      sum += isNaN(item.money) ? 0 : Number(item.money); //isNaN 引数がNanかどうか真偽を返却。数値だったら、金額を取得して合算。
    });

    return sum;
  }
}
