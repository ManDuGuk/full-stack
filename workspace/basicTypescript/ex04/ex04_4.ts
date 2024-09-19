//추상클래스 (abstract 클래스)
// 추상클래스
// abstract 키워드를 사용해 추상클래스를 만들 수 있다.
// 추상클래스의 목적은 이를 상속받는 자식 클래스에서 추상클래스의 속성이나 메서드를 강제로 구현하게 하려는 목적이다.
// 추상클래스는 new연산자를 이용해 객체를 만들 수 없다. 이를 상속받은 자식클래스 객체로는 객체 생성이 가능하다.

import { log } from "console";

/**
 * abstract class 클래스명{
 *      abstract 속성명:속성타입
 *      abstract 메서드명():반환타입;
 * }
 */
abstract class AbstractPerson{
    abstract name:string;//필수 속성
    constructor(public age?:number){}
    abstract showInfo():void;
}

// let abs1:AbstractPerson=new AbstractPerson(); //[x]
//추상클래스는 타입선언은 가능하나, new해서 객체생성은 할 수 없다

//추상클래스를 상속받은 자식클래스에서는 추상클래스의 멤버들을 구현해야 한다(의무사항)
//name, showInfo() 구현
class MyPerson extends AbstractPerson{
    constructor(public name:string, public age:number){
        super(age);
        this.name = name;
    }
    showInfo(): void {
        const str=`이름: ${this.name}, 나이: ${this.age}`;
        console.log(str);
    }
}

let my1:MyPerson = new MyPerson("고길동",40);
let my2:AbstractPerson =new MyPerson("고둘리",10);


my1.showInfo();
my2.showInfo();

