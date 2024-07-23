//모든 사원들의 공통 프로퍼티와 메소드 정의
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;

}

Employee.prototype.getName = function () {
    return this.name;
}
Employee.prototype.getSalary = function () {
    return this.salary;
}
Employee.prototype.toString = function () {
    return `이름:${this.name},월급:${this.salary}`;
}

const employee = new Employee("남윤호", 1000);
// console.log(employee.getName());
// console.log(employee.toString());

//생성자 상속--> 생성자 상속을 한다고 해서 프로토타입까지 같이 상속되는것이 아니다.
function Manager(name, salary, bonus) {

    //this = {}; 만들어져 있음 --> bonus는 여기 추가됨
    //Employee(name,salary); --> 이런식으로 직접호출하면 객체(this={})안에 또 객체(this={})가 생성되어진 잘못된  방식으로 수행된다.

    //간접호출 
    Employee.call(this, name, salary);
    this.bonus = bonus;

}

//프로토타입 상속전
const manager = new Manager("매니저", 1000, 100);
console.log(manager);
console.log(manager.toString()); //프로토 타입이 상속되지 않는것이 확인된다. --> 해당 메소드가 없으니 최상위 오프젝트로 올라간다. 


//프로토타입 상속 --> 프로토타입 (타겟,원본)
Object.setPrototypeOf(Manager.prototype, Employee.prototype);
console.log(manager.toString()); //프로토 타입이 상속


//기능추가
Manager.prototype.getBonus = function () {
    return this.bonus;
}
console.log(manager.getBonus());

//기능 재정의(오버라이드)
Manager.prototype.getSalary = function () {
    return this.salary + this.bonus;
}

//toString도 재정의 해줘야 한다. 
Manager.prototype.toString = function () {
    return `이름:${this.name},월급:${this.getSalary()},보너스:${this.bonus}`;
}
console.log(manager.getSalary());
console.log(manager.toString());


//instanceof 의 쓰임(자식의 요소까지 true)
console.log("instanceof-----------------------------");
console.log(employee instanceof Object);
console.log(employee instanceof Employee);
console.log(employee instanceof Manager); //매너저는 Employee의 자식이여서 true 처리된다.
console.log(employee instanceof String);

//constructor와의 차이 --> 콘스트럭터는 자식의 요소은 false
console.log("constructor와의-----------------------------");
console.log(employee.constructor === Employee);
console.log(employee.constructor === Manager);

function doTask(employee) {
    if (employee instanceof Employee) {
        console.log("원하는 기능수행");
    } else {
        console.log("안되요");
    }
}

doTask(employee);
doTask(manager);
doTask(new Date());