//객체와 인터페이스
//object 타입:인터페이스와 클래스의 상위 타입
let obj:object={name:'tom',addr:'la'};
console.log((<{name:'tom',addr:'la'}>obj).name,(<{name:'tom',addr:'la'}>obj).addr); //강제타입 형변환

//object 타입은 객체를 대상으로 하는 any타입처럼 동작한다.
obj={first_name:'tom',last_name:'kim'}
console.log(obj);

//인터페이스로 객체 타입 정의
/*
 *interface 인터페이스명{
    속성명[?]: 속성타입;
 } 
 * 
 */

 interface myPerson{
    name:string;
    age:number;
    height:number|undefined;
    profile:string[]|undefined;
 }

 let test:myPerson={name:"쉬비",age:33,height:55,profile:["test","test2"]};

 //person타입의 변수선언하고 속성값 할당하세요
 let p1:Person={name:'쉬늬',age:53,height:undefined,profile:['앱개발1',"풀3"]}

 console.log(p1.name,p1.age,p1.height);
 p1.profile?.forEach((pf=>console.log(pf)));

 interface Student{
    no:number; //필수 속성
    name:string; //필수 속성
    tel?:string; //선택속성. tel을 지정하려면 string,아니면 tel속성을 생략해도 된다.
 }
 
 let s1:Student={no:101,name:'민지',tel:'010-2222-3333'}
 console.log(s1);
 let s2:Student={name:'호동',no:102}
 console.log(s2)
//  let s3:Student={no:103,tel:'010-234-123'}
//  console.log(s3);
 
 //익명 인터페이스(annoymous interface)
 let teacher:{
    no:number;
    name:string;
    subject?: string;
 }

 teacher={no:200,name:'김교사',subject:'국어'}
 console.log(teacher.name,teacher.subject);

 //익명 인터페이스는 함수 구현시 사용
 function showInfo(user:{name:string,age:number,etc?:boolean}):void{
    let str=user.etc ? `name:${user.name},age:${user.age},etc:${user.etc}`:`name:${user.name},age:${user.age}`;
    console.log(str);
    
 }

 //showInfo()호출하기
 showInfo({name:'김승희',age:30})
 showInfo({name:'이승희',age:20,etc:true})

//객체 리터럴을 함수의 인자로 전달하면 TS은 객체에 지정된 타입외의 속성이 있는지 검사한다.
//showInfo({name:'최승희',age:20,etc:false,hobby:'reading'})
//==> 에러발생

 //변수에 저장하여 전달하면 초과 속성이 있어도 필수 속성만 있으면 통과한다.
 let user1 = {name:'최승희',age:24,etc:false,hobby:'reading'}
 showInfo(user1);

 function printLabel(labelObj:{label:string}):void{
    console.log(labelObj.label);
 }
 let item={label:"size 260 shoes",size:170}
 printLabel(item); //변수로 전달하면 label 속성만 갖고 있으면 문제되지 않음
 printLabel({label:'size 220 shoes'});
//  printLabel({label:'size 220 shoes'},size:270);//객체 리터럴로 전달하면 이야기가 다름

interface Squareconfig{
    color?:string;
    width?:number;
}
interface ShapeArea{
    color:string;
    area:number;
}

//함수명:createQuare
//매개변수:config ==>Squareconf타입으로 
//반환타입:shapearea타입으로

function createSquare(config:Squareconfig):ShapeArea{
    let newSquare:ShapeArea={color:'white',area:0};
    if(config.color){
        newSquare.color=config.color;
    }
    //폭이 들어오면 area계산해서 할당
    if(config.width){
        newSquare.area = Math.pow(config.width,2); //폭의 2제곱
    }
    return newSquare;
}

 //1.color가 'orange'색을 갖는 정사각형의 정보를 createSuare()호출해서 출력하세요
 let r1:ShapeArea = createSquare({color:'orange'}); //-->여기는 왜 명시한거?
 //2.width가 8인 정사각형의 정보를 createSquare()호출해서 출력하세요
 let r2=createSquare({width:8});
 //3.{} 빈 객체를 createSquare()에 전달하여 정보 출력
 let r3=createSquare({});

 console.log(createSquare({color:'red',width:12}));
 

 //읽기 전용 property --> readonly를 붙이면 읽기 전용 속성이 된다.
 interface Point{
    readonly x:number;
    y:number;
 }
 let p2:Point = { x:10,y:20};
 console.log(p2.x,p2.y);

 //배열의 경우 ReadOnlyArray<T>타입을 제공한다.
 //이 타입으로 생성된 후에는 배열을 수정할 수 없다.
 let arr:number[]=[1,2,3,4];
 let arr2:ReadonlyArray<number>=arr; //원본배열을 가르키는게 맞고 해당 명령어로는 원본배열이 수정이 불가능하게 제한하는것 뿐이다.

 let arr3:number[]=arr;

 //arr은 읽기/수정/삭제/'삽입 가능
 //arr2는 읽기만 가능
 arr.push(5)
 console.log(arr);
 console.log(arr2);
 arr3.push(6);

 console.log(arr3);
 console.log(arr);
 
// arr2.push(6); -->안됨
 
 let arr4:string[]=["hi","bye","hellow","bying"];
 let arr5=arr4; //얕은 복사

 arr5[1]='allo';
 console.log(arr4[1]);
 console.log(arr5[1]);

 let arr6=[...arr4]; //깊은 복사
 