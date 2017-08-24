export class Relationship{
    //選択肢
    private keyValue = [
        {key: 0, value: '夫'},
        {key: 1, value: '妻'},
        {key: 2, value: '子'},
        {key: 9, value: '親'}
    ];

    //getメソッド
    get() {
        return this.keyValue;
    }

    //↓あんまし意味が分からないが追加。(お手本にあった。)
   /**
   * When it is other than 0, 1, 2, 9
   * it becomes as follows "Uncaught TypeError: Cannot read property 'value' of undefined".
   */
    value (key: number): string {
        return this.keyValue.filter(
          (value, index) => (value.key === Number(key)) ? this.keyValue[index] : ''
        )[0].value;
      }
    //↑あんまし意味が分からないが追加。(お手本にあった。)
}
