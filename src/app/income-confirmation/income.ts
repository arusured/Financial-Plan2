export class Income {

    public income: number; //収入
    public incomeTax: number; //所得税
    public insurancePremium: number; //社会保険料
    public residentTax: number; //住民税

    get afterTaxIncome(): number { //手取りの計算
        return this.income - this.incomeTax - this.insurancePremium - this.residentTax;
    }

    constructor(income, incomeTax, insurancePremium, residentTax){
        this.income = income;
        this.incomeTax = incomeTax;
        this.insurancePremium = insurancePremium;
        this.residentTax = residentTax;
    }
}
