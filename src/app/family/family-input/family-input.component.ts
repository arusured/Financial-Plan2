import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FamilyService } from '../family.service';

import { Human } from '../human';
import { Relationship } from '../relationship';

@Component({
  selector: 'fp-family-input', //タグの名前
  templateUrl: './family-input.component.html',
  styleUrls: ['./family-input.component.css']
})
export class FamilyInputComponent implements OnInit {

  human: Human; //humanオブジェクトを生成

  relationships: any; //relationshipオブジェクトを生成

  constructor(
    private familyService: FamilyService //familyServiceオブジェクトを生成(他で使わないのでprivate？)
  ){}

  ngOnInit() {
    this.relationships = new Relationship().get(); //インスタンス生成&配列の取得
  }

  public onSubmit(form: NgForm): void { //戻り値なしのメソッド生成 (引数はNgFormであることを明言している。)

    const human: Human = {
      name: form.value.name,
      relationship: form.value.relationship,
      birthday: new Date(form.value.birthday)
    };

    this.familyService.add(human);

    form.reset();
  }
}
