//객체와 인터페이스
//object 타입: 인터페이스와 클래스의 상위 타입
let obj:object ={name:'Tom',addr:'LA'}
console.log((<{name:'Tom',addr:'LA'}>obj).name, (<{name:'Tom',addr:'LA'}>obj).addr);
console.log(obj);

obj={first_name:"Tom", last_name:"Kim"}
console.log(obj);
//object타입은 객체를 대상으로 하는 any타입처럼 동작한다

//인터페이스로 객체 타입 정의
/*
    interface 인터페이스명{
        속성명[?]: 속성타입;
    }
*/
interface Person{
    name:string;
    age:number;
    height:number|undefined;
    profile:string[]|undefined
}
//Person타입의 변수 선언하고 속성값 할당하세요
let p1:Person={name:'순희', age:22, 
    height:undefined, profile:['앱 개발자 1년','풀스택 개발자 3년']}

console.log(p1.name, p1.age, p1.height);
p1.profile?.forEach((pf=>console.log(pf)))    

//let p2:Person={name:'영희'} [x]

interface Student{
    no:number; //필수 속성
    name:string;//필수
    tel?:string; //선택 속성. tel을 지정하려면 string, 아니면 tel속성을 생략해도 된다
}
//s1, s2
let s1:Student={no:101, name:'민지', tel:'010-2222-3333'}
console.log(s1);

let s2:Student={name:'호동',no:102}
console.log(s2);

// let s3:Student={no:103, tel:'011-1111-1111'} [x]
// console.log(s3);

//익명 인터페이스 (anonymous interface)
let teacher:{
    no:number;
    name:string;
    subject?:string;
}
teacher={no:200, name:'김교사', subject:'국어'}
console.log(teacher.name, teacher.subject);

//익명 인터페이스는 함수 구현시 사용
function showInfo(user:{name:string, age:number, etc?:boolean}):void{
    let str=user.etc ? `Name:${user.name}, Age:${user.age}, ETC: ${user.etc}`:
                    `Name:${user.name}, Age:${user.age}`;
    console.log(str);    
}
//showInfo()호출하기
showInfo({name:'김승희',age:30})
showInfo({name:'이승희', age:20, etc:true})
// showInfo({name:'최승희', age:25, etc:false, hobby:'reading'})
//==>에러 발생
// 객체 리터럴을 함수의 인자로 전달하면 TS은 객체에 지정된 타입 외의 속성이있는지
// 검사한다 
let user1={name:'최승희', age:25, etc:false, hobby:'reading'}
showInfo(user1)
//변수에 저장하여 전달하면 초과 속성이 있어도, 필수 속성만 있으면 통과

function printLabel(labelObj:{label:string}):void{
    console.log(labelObj.label);    
}
let item={label:'Size 260 Shoes', size:260}
printLabel(item) //변수로 전달하면 label속성만 갖고 있으면 문제되지 않음
printLabel({label:'Size 220 Shoes'})
// printLabel({label:'Size 270 Shoes', size:270}) [x]

//선택적 프로퍼티
interface SquareConfig{
    color?: string;
    width?: number;
}
interface ShapeArea{
    color:string;
    area:number;
}
//함수명: createSquare
//매개변수: config ==> SquareConfig타입으로
//반환타입: ShapeArea타입으로
function createSquare(config:SquareConfig):ShapeArea{
    let newSquare:ShapeArea={color:'white', area:0};
    if(config.color){
        newSquare.color=config.color;
    }
    //폭이 들어오면 area계산해서 할당
    if(config.width){
        newSquare.area= Math.pow(config.width,2); //폭의 2제곱
    }
    return newSquare;
}
//1. color가 'orange'색을 갖는 정사각형의 정보를 createSquare()호출해서 출력하세요
let r1:ShapeArea = createSquare({color:'orange'})
console.log(r1);

//2. width가 8인 정사각형의 정보를 createSquare()호출해서 출력하세요
let r2= createSquare({width:8});//{ color: 'orange', area: 0 }
console.log(r2);//{ color: 'white', area: 64 }

//3. {} 빈 객체를 createSquare()에 전달하여 정보 출력
let r3=createSquare({});
console.log(r3);

console.log(createSquare({color:'red', width:12}));

//읽기 전용 property ==> readonly를 붙이면 읽기전용 속성이 된다
interface Point{
    readonly x:number;
             y:number;
}
let p2:Point ={ x:10, y:20};
console.log(p2.x, p2.y);//출력 가능
//p2.x=200; //x는 출력용으로만 사용가능
p2.y=300;
console.log(p2.x, p2.y);//출력 가능

//배열의 경우 ReadonlyArray<T> 타입을 제공한다
//이 타입으로 생성된 후에는 배열을 수정할 수 없다

let arr:number[]=[1,2,3,4]; 
let arr2:ReadonlyArray<number>=arr;
//arr은 읽기/수정/삭제/삽입 가능
//arr2는 읽기만 가능
arr.push(5);
console.log(arr);
arr[0]=100;
console.log(arr);
arr.splice(1,2)//인덱스기 1인 곳에서 2개 삭제
console.log(arr);

//arr2.push(10);//[x]
//arr2[0]=50;//[x]

let arr3:string[]=["hello","hi","bye"];
let arr4=arr3;//얕은 복사

console.log(arr3);
console.log(arr4);
//arr4배열의 인덱스 1번인 곳의 문자열을 "allo"로 변경하세요
arr4[1]='allo';
console.log(arr4);//[ 'hello', 'allo', 'bye' ]
console.log(arr3);//[ 'hello', 'allo', 'bye' ]

let arr5=[...arr3 ];//깊은 복사 스프레드 연산자 사용해서 사본을 만들 수 있다
console.log(arr5);//[ 'hello', 'allo', 'bye' ]
arr5[1]="Hi";
console.log(arr5);//[ 'hello', 'Hi', 'bye' ]
console.log(arr3);//[ 'hello', 'allo', 'bye' ] 원본은 수정되지 않는다

