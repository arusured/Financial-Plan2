import { Component, OnInit, Input } from '@angular/core'; //Inputも使うから追記
import { NgForm } from '@angular/forms'; //NgFormタグを使うから追記

import { Human } from '../human'; //Humanクラスを使うから追記
import { FamilyService } from '../family.service'; //FamilyServiceコンポーネントを使用するから追記
import { Relationship } from '../relationship'; //Relatinoshipコンポーネントを使用するから追記

@Component({
  selector: 'fp-family-update',
  templateUrl: './family-update.component.html',
  styleUrls: ['./family-update.component.css']
})
export class FamilyUpdateComponent implements OnInit {

  human: Human; //Human型宣言
  relationships: any; //関係性の型(配列)宣言

  @Input() //行番号の領域宣言
  rownum: number;

  @Input() //名前の領域宣言
  name: string;

  @Input() //関係性の領域宣言
  relationship: string;

  @Input() //誕生日の領域宣言
  birthday: Date;

  constructor(
    private familyService: FamilyService //コンストラクタ
  ) { }

  ngOnInit() {//初期処理
    this.relationships =  new Relationship().get(); //インスタンス生成＆関係性取得
  }

  public onSubmit(form: NgForm): void{ //onSubmitクラス(引数はNgForm型)戻り値なし

    const human: Human = { //定数の宣言
      name: form.value.name, //名前は、フォームで入力されたやつを使いますよー
      relationship: form.value.relationship, //関係性は、フォームで入力されたやつを使いますよー
      birthday: new Date(form.value.birthday) //誕生日は、フォームで入力されたやつを使いますよー
    };

    this.familyService.update(this.rownum, human); //updateクラスを呼び出す(行番号とhumanを引数に)

    form.reset(); //入力値をリセットしたりする
  }

  get birthdayFormat(){
    return this.birthday.toISOString() .substring(0, 10); //date型に入っている物から年月日を取得する。(形式：2017-08-24・・・だからサブストリングは0,10)
    //toISOStringはIS8601の文字列表現であるため、2017-08-24・・・という形式になっている。
  }
}
