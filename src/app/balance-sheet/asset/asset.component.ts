import { Component, OnInit } from '@angular/core';
import { BalanceSheetItem } from '../balance-sheet-item'; //追加
import { BalanceSheetService } from '../balance-sheet.service'; //追加

@Component({
  selector: 'fp-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  assets: BalanceSheetItem[]; //BalanceSheetItemの配列を使いますよ～

  constructor(private balanceSheetService: BalanceSheetService) {} //コンストラクタ

  getAssets(): void {
    this.balanceSheetService.getAssets().then(assets => this.assets = assets); //単にassetsに項目名、金額、通貨単位を入れているだけ？
  }

  calcAssetTotal(): number {
    return this.balanceSheetService.getMoneyTotal(this.assets); //良くわからない。
  }

  ngOnInit() {
    this.assets = [];
    this.getAssets();
  }

}
