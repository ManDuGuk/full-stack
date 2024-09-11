import { log } from "util";

class Animal{
constructor(public name:string="Unkowon"){};
move(meters:number):void{
    console.log(`${this.name}이 ${meters} 맘큼 움직임`);
    
}
}

class Dog extends Animal{
    constructor(name:string){

        super(name) //생성자를 구성하면 자식 생성자에서는 super()를 명시적으로 호출래야한다.
        console.log("생성자");
        
    }

    bark():void{
    console.log("멍멍");
    
 }
}

let ani1:Animal = new Animal();
ani1.move(10);

let dog1:Dog = new Dog("사랑이");
dog1.bark();
dog1.move(20);

class Snake extends Animal{
    constructor(name:string){
        super(name)
    }
    move(meters: number=10): void {
        console.log(`뱀뱀 ${this.name}이 ${meters} 맘큼 움직임`);
    }
}

let sn1 = new Snake("꼬마뱀");
console.log(sn1.name);
sn1.move(10);

//부모자식 상속관계가 있다면 
//부모 타입의 변수를 선언하고 자식 객체로 생성
let tom1:Animal = new Animal("tom animal");
let tom2: Animal = new Dog("tom dog")
let tom3: Animal = new Snake("tom dog")

//부모타입으로 선언하고 자식의 객체로 생성할 경우에는 
//부모가 상속해준 메서드만 접근 가능하다
//자식이 갖는 고유한 메서드나 속성은 접근불가
//부모가 물려준 재산에 대해서만 간섭가능
tom1.move(10) //Animal 객체
tom2.move(20) //Dog 객체
// tom2.bark() //접근불가 .tom2가 Animal 타입이므로

tom3.move(30);
// tom3.move(); //오버라이드 기본값 적용불가

//부모타입을 자식타입으로 변환하면 접근가능(타입 단언-typoe assertion)
//타입단언 형식
//[1] <타입> 객체변수
//[2] 객체변수 as 타입
(<Dog>tom2).bark(); //타입단언(타입 변환) tom2를 dog 타입으로 형변환하면서 bark()호출가능
(<Snake>tom3).move(); //tom3를 타입 단언해보세요

(tom2 as Dog).bark();
(tom3 as Snake).move();

//object가 최상위 부모 object에는 name속성이 없다.
//부모타입의 변수로는 name을 접근할수 없다.
let person:object = {name:'홍길동',tel:'101-234'};
let s=(<{name:string,tel:string}> person).name;
let c=(person as {name:string}).name;
let v=(<{name:string,tel:string}> person).tel;
console.log(s+c+v);

