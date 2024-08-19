export class Student {
    constructor(num, name, ko, en, math) {
        this.num = num;
        this.name = name;
        this.kor = ko;
        this.en = en;
        this.math = math;
    }

    set num(num) {
        this._num = num;
    }
    get num() {
        return this._num;
    }

    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }

    set kor(kor) {
        this._kor = kor;
    }
    get kor() {
        return this._kor;
    }

    set en(en) {
        this._en = en;
    }
    get en() {
        return this._en;
    }

    set math(math) {
        this._math = math;
    }
    get math() {
        return this._math;
    }
}

