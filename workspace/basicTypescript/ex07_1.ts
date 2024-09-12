// 폴더명
// ex01: 타입주석 관련
// ex02: 타입주석/타입추론 관련
// ex03: 인터페이스/type 관련
// ex04: 클래스/상속/타입단언/추상클래스 관련
// ex05: 함수구성/함수호출
// myutil:함수를 구성하여 모듈화
// ex06: 튜플
// ex07:제너릭 /대수 데이터 타입(algebraic data type) union|intersect

//generic타입: 변수,함수,클래스 등을 다룰때 데이터 타입을 파라미터화 해서 사용하는것
//유연성,코드의 재사용성을 높일수 있다.

interface IValuable{
    value:string; //타입이 string으로 고정
    valueArray:string[]
}

interface GValuable<T>{ //제너릭타입
    value: T;
    valueArray: T[];
}

let iv:IValuable = {value:"hello",valueArray:["a","b","c"]}
    console.log(iv.value);
    console.log(iv.valueArray);

let gv:GValuable<number>={
    value:100,
    valueArray:[1,2,3]
}
console.log(gv.value);
console.log(gv.valueArray);
    
let gv2:GValuable<boolean>={
    value:true,
    valueArray:Array(3).fill(false)
}
console.log(gv2.value);
console.log(gv2.valueArray);


//함수 정의할때 제너릭 사용
function printArr(arr:number[]):void{
    for(const v of arr){
        console.log(v);
        
    }
}
printArr([10,20]);

function printArray<T>(arr:T[]):void{
    for(const v of arr){
        console.log(v);
    }
}

//---------------
//함수호출<number>,<string>
printArray<number>([1,2,3,4]);
console.log("-------------");
printArray<string>(["hi","bye","bhing","23r3"]);


type AMan<T>={
    no:T,
    name:string;
    tel:string;
}

let b1:AMan<number>={
    no:10,
    name:"에이맨",
    tel:"1111",
}

let b2:AMan<string>={
    no:"20",
    name:"에dyd이맨",
    tel:"111123",
}

printArray<AMan<number>>([b1])
printArray<AMan<string>>([b2])

//클래스에 제너릭 적용
//Gvalueable에 인터페이스를 상속하는 클래스를 구성해보자
class Value<T> implements GValuable<T>{
    constructor(public value:T,public valueArray:T[]){}
}

//value타입 변수 선언해서 객체 생성해보세요
let v1:Value<number> = new Value(800,[9,8,7]);
console.log(v1.valueArray);
console.log(v1.value);

const printValue=<T>(obj:GValuable<T>):void=>{
    console.log('---value 만 출력---');
    console.log(obj.value);
}

printValue(v1);
printValue(new Value<string>("오영수",["개발자","취미:영화감상"]))
printValue(new Value<AMan<number>>(b1,[b1]));
printValue(new Value<boolean>(false,[false,true]))

//GValualbe 타입을 매개변수로 받되,valueArray 배열값들을 출력하는 함수를 
//화살표 함수로 구성하세요 ==> printValueArray()
let printValueArray =<T> (obj:GValuable<T>):void=>{
    if(!obj.valueArray || obj.valueArray.length==0){
        console.log("배열이 없습니다");
    }else{
        for(const v of obj.valueArray){
            console.log(v);
        }
    }
}

printValueArray(v1);
printValueArray(new Value<string>("오영수",["개발자","취미:영화감상"]))
printValue(new Value<AMan<number>>(b1,[b1]));
printValue(new Value<boolean>(false,[false,true]))

