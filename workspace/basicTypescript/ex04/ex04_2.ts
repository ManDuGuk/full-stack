//클래스명: Animal
//멤버속성: name  
//멤버메서: move(meters)
class Animal{
    constructor(public name:string ='Unknown'){}
    move(meters:number):void{
        console.log(`${this.name} Animal이 ${meters} m만큼 움직였어요`);
        
    }
}////////////////////
//클래스명:Dog ==> Animal클래스를 상속받도록 구성하세요
//메서드 bark() 메서드를 구성해서 "멍멍~" 을 출력하도록 구성하세요
class Dog extends Animal{

    constructor(name:string){
        super(name) //생성자를 구성하면 자식의 생성자에서는 super()를 명시적으로 호출해야 한다        
        console.log('생성자야....');
    }

    bark():void{
        console.log('멍멍~~~');
        
    }
}//////////////////////////
//[1] Animal타입의 객체 생성한뒤 move()호출하기
let anim1:Animal =new Animal();
let anim2:Animal =new Animal("Tiger");
anim1.move(10)
anim2.move(500);
//anim1.bark() [x]

//[2] Dog타입의 객체 생성한 뒤 move()호출하기, bark()호출하기
let dog1:Dog =new Dog("똘똘이 강아지");
dog1.bark();
dog1.move(20)

//Snake 클래스를 구성. Animal상속받도록
//생성자도 구성(이름을 매개변수로 받도록)
//move()함수를 재정의해서 구성하세요 ==>override
//"XX뱀이 ~~20m 기어가요"

class Snake extends Animal{
    constructor(name:string){
        super(name)
    }
    move(meters=5){//move()함수를 재정의(override)
        console.log(`${this.name}뱀이 ${meters} 만큼 기어가요~~~`);        
    }
}/////////////////////
let sn1:Snake =new Snake('Python');
sn1.move(3);//[o]
sn1.move(); //[o]

//dog1.move() //[x]
dog1.move(7) //[o]

//상속관계가 있다면
//부모 타입의 변수를 선언하고 자식 객체로 생성
let tom1:Animal =new Animal("Tom Lion");
let tom2:Animal =new Dog("Tom Puppy");
let tom3:Animal =new Snake("Tom Snake");
//부모타입으로 선언하고 자식의 객체로 생성할 경우에는
//부모가 상속해준 메서드만 접근 가능하다
//자식이 갖는 고유한 메서드나 속성은 접근 불가
tom1.move(10)//Animal객체

tom2.move(20)//Dog객체
//tom2.bark() //[x] 접근불가. tom2가 Animal타입이므로

tom3.move(30);//Snake객체
//tom3.move();//[x]

//부모타입을 자식타입으로 변환하면 접근 가능 (타입 단언-Type Assertion)
//타입단언 형식
// [1]  ( <타입>객체변수 )
// [2]  ( 객체변수 as 타입 )

//tom2.bark()  //Animal타입이므로 bark()호출 불가능
(<Dog>tom2).bark(); //타입 단언(타입 변환) tom2를 Dog타입으로 형변환하면 bark()호출 가능
(<Snake>tom3).move(); //tom3를 타입 단언해보세요

( tom2 as Dog ).bark();
( tom3 as Snake).move();

let person:object ={name:'홍길동', tel:'010-1111'};
//console.log(person.name); [x]
//object가 최상위 부모. object에는 name속성이 없다
//부모타입의 변수로는 name을 접근할 수 없다

let s=( <{name:string}> person).name;
console.log(s);
console.log((<{tel:string}>person).tel);

console.log((person as {name:string}).name);
console.log((person as {tel:string}).tel);

