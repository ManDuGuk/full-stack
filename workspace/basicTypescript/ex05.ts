// 폴더명
// ex01: 타입주석 관련
// ex02: 타입주석/타입추론 관련
// ex03: 인터페이스/type 관련
// ex04: 클래스/상속/타입단언/추상클래스 관련
// ex05: 함수구성/함수호출
// myutil:함수를 구성하여 모듈화

/*
[1] function 키워드를 사용하는 함수
    function 함수명(변수1:타입1,변수2:타입2,...):반환타입{
        내용구성
    }
[2] 리터럴 방식의 함수
    ==>람다식(화살표 함수)
    const 함수명 = function(변수:타입,...):반환타입{

    }

    const 함수명 = (변수:타입,...):반환타입=>{}
*/

function greeting(name:string,msg:string="환영한다 아쎄이"):void{
   console.log(name+msg);
}
greeting("남윤호","환영한다 아쎄이");

let printShape =(name:string,count:number):void=>{
    for (let index = 0; index < count; index++) {
      console.log(name);
    }
}

printShape("아쎄이 기합!",10);

//객체의 구조 정이 ==>interface/type
//함수의 구조 정의 ==>함수 시그니처(함수의 타입 선언)

let add: (x:number,y:number)=> number; //함수 signature

//add함수 구성
add=(a:number,b:number):number=>{
    return a+b;
}

//multiply 함수
let multplay : (x:number,y:number)=>number;
multplay =function(x,y){
    return x*y;
}

console.log(multplay(8,9));


//반환타입이 없는 함수 시그니처
let logMsg:(msg:string)=>void =function(msg:string):void{
    console.log(msg);
}
logMsg('잘햇다 아쎄이');

//선택적 매개변수가 있는 함수 시그니처
let greetOptionalAge:(name:string,age?:number)=>string;
greetOptionalAge=(name:string,age?:number)=>{
    if(age){
        return `안녕하세요 ${name}님 당신의 나이는 ${age}세 이군요`;
    }else{
        return `안녕하세요 ${name}님`;
    }
}
console.log(greetOptionalAge('안영철'));
console.log(greetOptionalAge('김영철',45));
