/* 
class 클래스명{
   [private | protected | public] 속성명[?] : 속성타입
}
   클래스 = 멤버변수 + 메서드 + 생성자

   let 변수:클래스명 = new 생성자();

   접근제한자(access modifier)
    - public
    - protected
    - private
*/
class Superman{
    name:string="";//초기화를 하지 않으면 에러남
    height:number=160;
    power?:number;
}
let peter:Superman =new Superman(); //new연산자를 이용해 객체를 생성
console.log(peter.name, peter.height);
peter.name="Peter";
peter.height=170;
peter.power=5000;
console.log(peter.name, peter.height, peter.power);

//생성자: 객체를 생성할 때 호출되는 메서드의 일종
//          constructor라는 이름으로 구성한다
class Aquaman{
    constructor(public name:string, public height:number, public speed?:number){}
    //생성자 매개변수에 public을 붙이면 매개변수의 이름을 가진 속성이 클래스에
    //선언된 것 처럼 동작함  아래 Human클래스 구성한 것과 동일
}
class Human{
    name:string;
    height:number;
    constructor(name:string, height:number){
        this.name=name; //멤버변수(this.name)를 매개변수(name)로 초기화
        this.height = height;
    }
}
//1. Aquaman 객체를 생성후 콘솔에 객체를 출력
let a1:Aquaman = new Aquaman("인어공주",170,150.55);
console.log(a1);
let a2:Aquaman = new Aquaman("고등어",50);
console.log(a2);
//2. Human객체도 생성후 출력
let h1:Human=new Human("아무개",155);
console.log(h1);


interface IPerson{
    name:string;  
    age:number; 
    height?:number;   
}
//클래스가 인터페이스를 상속받을수 있다.
//implements 를 이용해서 상속받는다
//인터페이스가 인터페이스를 상속받을 때===> extends
//인터페이스는 spec역할을 할 뿐 해당 속성을 자동으로 만들어주지 않는다
//클래스에서는 인터페이스에 정의한 속성을 멤버 속성으로 기술해야 한다
class Person implements IPerson{
    name:string="아무개";
    age:number=20;

    public showInfo():string{
        return `
        Name: ${this.name}
        Age : ${this.age}
        `;
    }

}
let p3:Person =new Person();
console.log(p3);
//Person타입 객체를 1개 더 생성하고, 이름, 나이값 지정한 후 showInfo()호출
let p4:Person =new Person();
p4.name="김성수";
p4.age=28;
let str=p4.showInfo();
console.log(str);

//클래스가 클래스를 상속받을 때는 extends를 이용
class Woman{
    name:string; //접근 제한자를 생략하면 public임==> 어디서든 접근 가능
    protected age:number;//private:Woman클래스 내에서만 접근 가능
                        //protected: 자기 클래스 + 상속관계 일때 자식클래스에서 접근 가능
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    info():void{
        console.log(`Hello, my name is ${this.name} and my age is ${this.age} years old`);
    }
}

//Woman객체 1개 생성해서 해당 객체의 name값을 출력
let w1:Woman = new Woman("이청아",22);
console.log('w1.name: ', w1.name); //public
//console.log('w1.age: ', w1.age); //private
w1.info();

class SuperWoman extends Woman{
    constructor(public name:string='슈퍼우먼', public age:number=20, public pwwer:number=100){
        super(name,age);
    }
}
let sw1:SuperWoman=new SuperWoman("김영희슈퍼우먼", 22, 800);
console.log(sw1);
