//Generic 타입 : 변수,함수, 클래스 등을 다룰 때 데이터 타입을 파라미터화 해서 사용하는 것
//              => 유연성, 코드의 재사용성 높일 수 있다
interface IValuable{
    value: string; //타입이 string으로 고정
    valueArray:string[]
}
interface GValuable<T>{  //<T> ==> 제너릭 타입
    value: T;
    valueArray: T[];
}
let iv:IValuable ={value:"Hello", valueArray:["a",'b','c']}
console.log(iv.value);
console.log(iv.valueArray);

//let iv2:IValueable={value:100, valueArray:[1,2]}
let gv:GValuable<number> ={
    value:100,
    valueArray:[1,2,3]
}
console.log(gv.value);
console.log(gv.valueArray);

//boolean타입을 받는 GValueable타입의 변수 선언후, 값 할당한 뒤 출력하세요
let gv2:GValuable<boolean>={
    value: true,
    valueArray: Array(3).fill(false)
}
console.log(gv2.value);
console.log(gv2.valueArray);

//함수 정의할 때 제너릭 사용
function printArr(arr:number[]):void{
    for(const v of arr){
        console.log(v);        
    }
}
//printArr(["10","20"]) [x]
function printArray<T>(arr: T[]):void{
    for(const v of arr){
        console.log(v);        
    }
}//------------------
//함수 호출 <number>, <string>
printArray<number>([1,2,3,4]);
console.log('-------------');
printArray<string>(["Hi","Hello","Bye~"])

//type 에서 제너릭 사용
type AMan<T>={
    no: T;
    name: string;
    tel:string;
}
let aman1:AMan<number>={no:10, name:"에이맨", tel:"1111"};
let aman2:AMan<string>={no:"20", name:"김수맨",tel:"2222"};
let aman3:AMan<number>={no:30, name:"비맨", tel:"3111"};
//printArray()호출해서 aman1,aman2 정보가 자동으로 출력되게 하세요
printArray<AMan<number>>([aman1, aman3])

//클래스에 제너릭 적용
//GValuable 인터페이스를 상속하는 클래스(Value)를 구성해보자
class Value<T> implements GValuable<T>{
    constructor(public value:T, public valueArray:T[]){}
}
//Value타입 변수 선언해서 객체 생성해보세요
let v1:Value<number>=new Value(800, [9,8,7]);
console.log(v1.value);
console.log(v1.valueArray);

const printValue=<T>(obj:GValuable<T>):void=>{
    console.log('---value 만 출력----');    
    console.log(obj.value);    
}
//printValue(v1)
printValue(v1)
printValue(new Value<string>("오영수",["개발자","취미: 영화감상"]))
printValue(new Value<AMan<number>>(aman1, [aman1,aman3]));
printValue(new Value<boolean>(false,[false,true]))

//GValuable타입을 매개변수로 받되, valueArray 배열값들을 출력하는 함수를
//화살표 함수로 구성하세요 ==> printValueArray()
const printValueArray=<T>(obj:GValuable<T>):void=>{
    console.log("****valueArray값 출력**********");
    
    if(!obj.valueArray || obj.valueArray.length==0){
        console.log('배열이 없습니다');        
    }else{
        for(const v of obj.valueArray){
            console.log(v);            
        }
    }
}//------------------------
printValueArray(v1)
printValueArray(new Value<string>("오영수",["개발자","취미: 영화감상"]))
printValueArray(new Value<boolean>(true, []))