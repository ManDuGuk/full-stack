//타입 주석(type annotion)
//let 변수:타입 =초깃값

import { log } from "util";

let myname:string = "hong"; //폴더가 같으면
myname="123";
console.log(myname);

//타입스크립트 자료형:string,number,boolean,null,undefined ,object,배열,튜플(tuple),열거형(enum)
let names:string[]=["hong","choi","kim"]
let age:number; //선언
age=22; //초기화
let height:number= 165.2;
console.log(names);
console.log(age,height);

let isLogin:boolean = true;
let user:object={}
// user.name ="Tom"; --> 이렇게 하면 타입 스크립트에서는 오류가 난다. 그려서 아래처럼 인터페이스를 이용힌다.
// user.age:32;

//인터페이스:타입스크립트에서 객체의 구조를 정의하는 방법
//객체가 가져야할 모양을 정의한다.
//==>확장이 가능(다른 인터페이스를 상속받아서 새로운 속성을 추가할수 있다.)
//동일한 이름의 인터페이스를 여러곳에서 선언할 경우,타입스크립트는 이를 하나의 인터페이스로 병합한다.
interface User{
    name:string;
    age:number;
}

let user2:User = {name:"윤호",age:26}

interface Man{
    name:string;
    height:number;

}

//인터페이스가 인터페이스를 상속받을때는 extends로 
//클래스가 인터페이스를 상속받을 때는 implement를 사용
interface Employee extends Man{
    dept:string;
    job:string;

}

//Man 타입의 변수 m1선언후 초기화 하세요
let m1:Man={name:"남윤호", height:165};
console.log(m1);

//emeploy타입 선언후 초기화
let e1:Employee = {name:'남사원',height:165,dept:'버러지부',job:'백수'};
console.log(e1);

//type 키워드를 이용해서 타입을 정의할수도 있다.
type Member={
    name:string,
    age:number
}

let m2:Member={name:'최회워낭',age:33}
console.log(m2);

type Emp= Member & { //intersect 타입(교차타입)
    dept:string
}

//일반적으로 객체의 구조를 정의할때는 인터페이스를 사용
// &(intersect type) 또는 | (union type)를 이용하여
//간결하게 표현하고자 할때는 type이용
let e2:Emp={name:'이진석',age:23,dept:'sales'};
console.log(e2);
type A={
    name:string
}
type B={
    age:number;
}
type C=A|B; //union 타입 (인터페이스는 교차타입은 가능하나 유니언 타입은 사용불가)

let person1:C ={name:"james"}
let person2:C ={age:28}
let person3:C={name:"james",age:31}
console.log(person1);
console.log(person2);
console.log(person3);


//타입추론
//j와 호환성르 위해 타입주석ㅇㄹ 생략할수 있다.
//ts컴파일러는 할당된 값에 따라 변수의 타입을 지정한다. ==> 타입추론
let a=100; //number
let b="hello"
let c=false;
let d={name:'아무게',age:20}

//값변경
//a="byebyle";
//컴파일러가 초기값에 따라 타입을 추록하므로,그 이후에 각 변소는 해당 타입의 값만 지정할수 있다.

//any타입:어떤 조율의 값도 지정하룻 있다. any타입으로 지정하면 컴파일러가 타임검사를 하지 않는다.
let e:any =0;
e="hi";
console.log("e:" ,e);

//undefined 타입
//ts에서는 타입이기도 하고 값이기도 하다.
//함수가 특정 조건에서만 값을 반환하고 그외에는 아무값도 반환하지 않게 할때 undefined를 사용
let f:undefined =undefined;
console.log(f);

function response(val:boolean):string|undefined{ //반환타입이 string혹은 undefined란 이야기
    if(val){
        return "success"
    }
    return undefined;

}
console.log(response(true));
console.log(response(false));

//유효성 체크 :함수의 매개변수나 객체 속성값이 존재하는 지 여부를 확인하기 위해  undefined타입을 사용할수 있다.
function check(name:string|undefined):void{
    if(name===undefined){
        console.log("이름 써라");
        
    }else{
        console.log(`당신의 이름은 ${name}이군요`);
        
    }
}

check(undefined);
check("남윤호")




