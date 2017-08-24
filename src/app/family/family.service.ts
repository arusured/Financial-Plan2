import { Injectable } from '@angular/core';

import { Human } from './human';

@Injectable() //Injectableを継承している？
export class FamilyService {

    family: Human[]; //配列準備

    constructor() {
        this.family = []; //コンストラクタ
    }

    add(human: Human): void {
        this.family.push(human); //humanクラスをfamilyに格納
    }

    update(rownum: number, human: Human): void {
        this.family[rownum] = human; //行番号を基に、humanクラスをfamilyに格納
    }

    get list(): Human[] {
        return this.family; //配列をセット
    }
}