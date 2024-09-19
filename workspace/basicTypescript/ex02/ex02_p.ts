//타입스크립트의 객체를 정의하고 자바스크립늬 객체와의 차이점을 서술
let test:object={
   name:"이름값",
   age:12,
}
console.log(test); //특이점은 object타입으로 객체를 생성해서 속성값을 부여하면 해당 객체의 값을 불러올때는 골때려 진다는거다.
let readname:string = (<{name:string,age:number}>test).name; // 다음과 같이 강제 타입 변환이 이루어져야 가능하다.
console.log(readname);
let age:number = (<{name:string,age:number}>test).age;
console.log(age);


//인터페이스를 선언하라 user, 속성은 name age
interface User{
   name:string,
   age:number,
}

//user 인터페이스를 상성받는 인터페이스를 생성할것
interface Man extends User{
   sex:string
}

//위에서 정의한 user 타입의 변수를 선언후 초기화
let person1:User = {
   name:"남윤호",
   age:30
}

//user를 상속받는 인터페이스를 이용한 객체를 생성후 초기화
let man1:Man = {
   sex:'남성',
   name:'남윤호',
   age:30
}

//man 인터페이스를 상속받은 클래스를 정의하라
class Mankind implements Man{

   //클래스의 경우 속성의 명시가 필요하다.
   name:string;
   age:number;
   sex:string;

   constructor(
      name:string,
      age:number,
      sex:string,
   ){
      this.name=name;
      this.age=age;
      this.sex=sex;
   }
}

//위의 식을 접근지정자를 이용하여 속성 명시 없이 좀더 단축해서 표현해볼것
class Mankinds implements Man{
   constructor(
      public name:string,
      public age:number,
      public sex:string,
   ){}
}


//타입키워드를 정의하라 
//인터페이스와의 표기 차이는 = 로 할당하냐의 차이정도?

type Manly={
   name:string,
   age:number,
   sex:string,
}

//타입키워드로 새로운 객체를 생성하라
let newman:Manly={
   name:"남윤호",
   age:30,
   sex:"male"   
}

//교차타입을 정의하라
type Womanly={
   name:string,
   age:number,
   sex:string,
   hair:string,
}

type Humans = Manly & Womanly;

let humy:Humans = {
   name:'nam',
   age:30,
   sex:"male",
   hair:'long'
}

console.log(humy);

type HumanHair = Manly&{hair:string}

let humy2:HumanHair = {
   name:'nam',
   age:30,
   sex:"male",
   hair:"sdf",
}

console.log(humy2)


//타입추론 과 값변경
let test01 = "ㅇㅇㅇ";
//test01= 444; //타입추론으로 값을 설정하면 자동으로 타입을 지정한것과 같다. 다른 자료형은 올수 없다.

//any타입과 undefined타입
let testany:any="문자열";
console.log(testany);

testany=444;
console.log(testany);

let unde:undefined;
console.log(unde); //함수가 특정 조건에서만 값을 반환하고 아니면 아무것도 반환지 않게 만드록 싶을때 사용한다고 한다.

