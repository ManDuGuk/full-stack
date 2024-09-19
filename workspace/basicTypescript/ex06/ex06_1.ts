/**TS에서 튜플(Tuple)은 배열과 유사하지만,
 * 고정 길이와 정해진 타입의 요소를 가질 수 있는 자료형이다
 * ex) 좌표 (x, y)
 */
let t1: [string, number]; //튜플타입 선언

t1=["Hello", 10];

//인덱스 이용해서 꺼내기
console.log(t1[0]); //Hello
console.log(t1[1]); //10

//튜플타입 string, number, boolean 타입을 갖는 튜플을 선언하고
//값을 할당하세요
//for루프 이용해서 저장된 값 출력하세요
let t2: [string, number, boolean];
t2=["Hi",3.14, true];
console.log(t2);

for(let i=0;i<t2.length;i++){
    console.log(t2[i]);
}
//튜플 요소 수정
t2[0]="Have a nice day~";
//t2[1]="100"; [x]
t2[1]=100;
t2[2]=false;
console.log(t2);

//함수에서 여러 값을 반환할 때 유용
//t1=>[string, number]
function getUserInfo(name:string, age:number):[string, number]{
    return [name,age];
}
let u1=getUserInfo('안상수',28);
console.log(u1[0], u1[1]);

//튜플에 선택적 요소/나머지 요소
//선택적 요소: ? 를 사용
//나머지 요소: ... 
let tuple : [string, number?]
tuple=['안녕'];
console.log(tuple);
tuple=['잘가',7];
console.log(tuple);

let tuple2 : [string, ... number[]];
//string은 필수이며, number타입의 요소들은 가변적으로 올 수 있단 의미
tuple2=["필수"]
tuple2=["필수",1,2,3]
tuple2=["필수",1,2,3,4,5]
console.log(tuple2);

//함수명 createTuple()
//매개변수 첫번째: string, 두번째 가변적인 숫자를 받아서
// 튜플로 반환하는 함수를 구성하세요
type MyTuple =[string, ... number[]];

function createTuple(args:MyTuple):MyTuple{
    let str=args[0].toUpperCase();
    console.log(str)
    let tmp:number[]=[];
    for(let i=1;i<args.length;i++){
        console.log(args[i]); 
         if(typeof args[i]==='number') 
             tmp.push(args[i] as number); //타입 단언   
    }
    //return args;
    return [str,...tmp];
}//----------------------
let ex1=createTuple(['first',1,2,3])
console.log(ex1);
