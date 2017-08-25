export class Expense {

    public monthly: number; //月次要素
    public suddenly: number; //年次要素

    get yearly(): number { //年間トータル
        return (this.monthly * 12) + this.suddenly; //月次×12＋年次
    }

    constructor(monthly, suddenly) { //コンストラクタ
        this.monthly = monthly;
        this.suddenly = suddenly;
    }
}
