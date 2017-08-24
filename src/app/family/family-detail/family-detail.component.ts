import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'fp-family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: ['./family-detail.component.css']
})
export class FamilyDetailComponent implements OnInit {

  @Input() //入力された名前
  name: string;

  @Input() //入力された関係性
  relationship: string;

  @Input() //入力された誕生日
  birthday: Date;

  @Input() //行番号
  rownum: number;

  myVar: boolean;

  constructor() { }

  ngOnInit() { //初期処理(表示)
    this.myVar = false;
  }

  onClick() { //登録ボタンが押されたら(非表示)
    this.myVar = true;
  }
}
