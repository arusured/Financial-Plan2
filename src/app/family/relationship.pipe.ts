import { Pipe, PipeTransform } from '@angular/core';

import { Relationship } from './relationship'; //Relationshipコンポーネントを使用するので追加

@Pipe({
  name: 'relationshipValue'
})
export class RelationshipPipe implements PipeTransform {

  transform(value: any, args?: any): any { //原点とする？
    return new Relationship().value(value);
  }

}
