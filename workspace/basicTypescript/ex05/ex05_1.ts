/* 
[1] function 키워드를 사용하는 함수
    function 함수명(변수1:타입1, 변수2:타입2,...): 반환타입{
        내용구성
    }

[2] 리터럴 방식의 함수
    ==>람다식 (화살표함수)
    const 함수명 = function(변수:타입,...): 반환타입{
    
    }
    --------------
    const 함수명 = (변수:타입,...):반환타입=>{   }

*/
//[1] 이름(name)과 인사말(msg)을 매개변수로 받아서 "인사말 이름 ~~" 를 반환하는 함수를
//    구성한 후 호출해보세요   함수명: greeting

function greeting(name:string, msg:string ="Hello"):string{

    return `${msg} ${name}님 ~~~`;
}

let str2=greeting("또치","반가워요^^ ");
console.log(str2);

str2=greeting("뽀로로");
console.log(str2);
//[2] 문자열 1개와 숫자 1개를 매개변수로 받아, 입력받은 숫자만큼
//인수로 들어온 문자열을 콘솔에 출력하는 함수를 구성후 호출하기
//==>화살표 함수. 함수명: printShape()
const printShape = (str:string="★★★", num:number=5):void=>{
    for(let i=0;i<num;i++){
        console.log(str);        
    }
}//------------------------
printShape("♥♥♥♥♥",3);
printShape("@@@");
printShape();

//객체의 구조 정의==> interface/type 
//함수의 구조 정의==> 함수 시그니처 (함수의 타입 선언)

let add: (x:number, y:number)=> number;  //함수 signature

//add함수 구성
add = (a:number, b:number):number=>{
    return a+b;
}
console.log(add(8, 9));

//multiply함수
let multiply : (x:number, y:number)=>number;

multiply =function(x, y){
    return x*y;
}
console.log(multiply(7,8));

//반환타입이 없는 함수 시그니처
let logMsg:(msg:string)=>void = function(msg:string):void{
    console.log(msg);
}
logMsg("Good Job~~!!");
logMsg("123456");

//선택적 매개변수가 있는 함수 시그니처
let greetOptionalAge: (name:string, age?:number)=>string;

greetOptionalAge =(name:string, age?:number)=>{
    if(age){    
        return `안녕하세요? ${name}님~ 당신의 나이는 ${age}세 이군요!!`
    }else{
        return `안녕하세요? ${name}님~~`
    }
}
console.log(greetOptionalAge('안영철'))
console.log(greetOptionalAge('김영철',45));
