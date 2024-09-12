// 폴더명
// ex01: 타입주석 관련
// ex02: 타입주석/타입추론 관련
// ex03: 인터페이스/type 관련
// ex04: 클래스/상속/타입단언/추상클래스 관련
// ex05: 함수구성/함수호출
// myutil:함수를 구성하여 모듈화
// ex06: 튜플

/*ts에서 튜플은 배열과 유사하지만
고정길이와 정해진 타입의 요소를 가질수 잇는 자료형이다.
ex)좌표(x,y)
*/

let t1:[string,number]; //튜플타입선언
t1=["hello",10];

//인텍스 이용해서 꺼내기
console.log(
    t1[0]
    ,t1[1]
);

//튜플타입 string,number,boolean 타입을 갖는 튜플릉 ㄹ선언하고
//값을 할당하세요
//for루프 이용해서 저장된 값 출력하세요
let t2:[string,number,boolean]
t2=["아저시",45,true];
t2.forEach(element => {
    console.log(element);
});

//튜플요소 수정
t2[0]="have a nice day~~";
t2[1]=100;
t2[2]=false;
console.log(t2);

//함수에서 여러 값을 반환할때 유용
//t1=>[stringk,number]
function getUserInfo(name:string,age:number):[string,number]{
    return [name,age];
}

let u1=getUserInfo('안상수',28);
console.log(u1[0],u1[1]);

//튜플에 선택적 요소/나머지 요소
//선택적 요소: ? 를 사용
//나머지 요소: ...
let tuple:[string,number?]
tuple=['안녕'];
console.log(tuple);
tuple=['잘가',7];
console.log(tuple);


let tuple2 : [string, ...number[]];
//string은 필수이며,number 타입의 요소들은 가변적으로 올수 있단 의미
tuple2=["필수"];
tuple2=["필수",1,2,3];
tuple2=["필수",1,2,3,4,5];
console.log(tuple2);


//함수명 creatTuple()
type MyTuple =[string,...number[]];
function creatTuple(args:MyTuple):MyTuple{
    
//  return [args[0].toUpperCase(),...args[1]]
let tmp:number[]=[];
for(let i =1; i<args.length; i++){
    console.log(args[i]);
    if(typeof args[i]==='number')
        tmp.push(args[i] as number);
    
}
return args;
}

let ex1=creatTuple(['first',1,2,3]);
console.log(ex1);

//매개변수 첫번째 :string,두번째 가변적인 숫자를 받아서 
//튜플로 반환하는 함수를 구성하세요




