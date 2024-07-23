// 클래스
// 생성자함수와 비슷하지만, 메소드 추가가 더 쉬워진다는 장점이 있다.
// 단축메서드의 사용이 가능하다.(생성자 함수에서는 단축메서드 사용 불가함)
// 캡슐화
class Employee {

    //constructor(){} 안에 있는게 생성자 함수처럼 처럼 초기화 하는것과 동일하다.
    //this.ssn = ssn;
    //this.name = name;
    constructor(name, salary) {
        //this = {}; 생성자 함수와 마찬가지로 빈객체가 하나 생성된다. 
        this.name = name;
        this.salary = salary;

        //return this; 마찬가지로 자동리턴
    }

    //메서드가 프로토타입에 들어가는건 아니다, 따로 넣줘야 한다. 
    getName() {
        return this.name;
    };
    getSalary() {
        return this.salary;
    };

    toString() {
        return `${this.name}\t${this.salary}`;
    }
}

const employee = new Employee("남윤호", 1000);


//겟터 세터 사용하기
class Employee2 {

    constructor(name, salary) {

        this._name = name;
        this._salary = salary;
    }

    set name(name) {

        this._name = name;

    }
    get name() {
        return this._name;
    }

    set salary(salary) {

        this._salary = salary;

    }
    get salary() {
        return this._salary;
    }

    toString() {
        return `${this._name}\t${this._salary}`;
    }

}

const employee2 = new Employee2("남윤호", 1000);
console.log(employee2.name);

//상속
class Manager extends Employee2 {

    constructor(name, salary, bonus) {

        //생성자에서는 외부에서 정의된 메서드? 어떤 기능을 끌어쓸데 this처리 때문에 object의 함수를 이용해서 끌어와 쓰는 문법을 사용했었다.
        //클래스에서는 상속을 받으므로 super처리를 해주면 아래와 같은 처리를 할수 있다.(생성자 함수로 처리되지만 그냥 자바처럼 만든것 뿐이다.)
        //Employee2.call(this, name, salary);
        //super가 위의 역할을 해준다. 
        super(name, salary);
        this._bonus = bonus;
    }

    set bonus(bonus) {

        this._bonus = bonus;

    }
    get bonus() {
        return this._bonus;
    }

    //오버 라이딩
    //오버 라이딩 시에도 상위의 메소드를 호출해서 코드를 줄일수도 있다.
    toString() {
        return `${super.toString()}\t${this._bonus}`;
    }


    static staticName = "어 나 스테딕이야"
    static staticMethod() {
        console.log("어 나 스택틱호출이야");
    }
}

const manager = new Manager("관리자", 1000, 100);
console.log(manager.salary);
console.log(manager.toString());


//클래스 문법에서 딱히 받는 매개변수를 초기화해줄 필요가 없다면 construnctor를 세팅해주지 않아도 정상작동된다.
class Manager2 {

    //단순출력
    out() {
        return `출력`;
    }
}

const test = new Manager2();
console.log(test.out());

//스테틱 메소드는 인스터스를 생성하지 않아도 쓸수 있다. 전역변수와 다른점은 스코프를 지정해서 특정 클래스에서만 전역으로 사용할수 있도록 제한을 줄수있다.
console.log(Manager.staticName);
Manager.staticMethod();


