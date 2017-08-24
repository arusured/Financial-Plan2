import { Component, OnInit } from '@angular/core';

import { FamilyService } from '../family.service'; //FamilyServiceコンポーネントを使用するので追加

import { Human } from '../human'; //Humanコンポーネントを使用するので追加

@Component({
  selector: 'fp-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  family: Human[]; //Human型宣言

  constructor(private familyService: FamilyService) { } //コンストラクタ(引数FamilyService)

  ngOnInit() {//初期処理
    this.family = this.familyService.list; //familyというHuman型に、familysServiceのlistを格納
  }

}
