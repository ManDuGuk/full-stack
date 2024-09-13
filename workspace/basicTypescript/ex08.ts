// 폴더명
// ex01: 타입주석 관련
// ex02: 타입주석/타입추론 관련
// ex03: 인터페이스/type 관련
// ex04: 클래스/상속/타입단언/추상클래스 관련
// ex05: 함수구성/함수호출
// myutil:함수를 구성하여 모듈화
// ex06: 튜플
// ex07:제너릭 /대수 데이터 타입(algebraic data type) union|intersect
//ex08:타입가드: 조건문 안에서 타입의 범위를 한정시켜주는 방법


//타입가드: 조건문 안에서 타입의 범위를 한정시켜주는 방법
//instanceof 연산자,typeof 연산자 등을 사용해서 타입의 범위를 좁힐수 있다.
export class Bird{
    fly():void{
        console.log(`나는 자유롭게 날아요`);
    }
}

export class Fish{
    swim():void{
        console.log('나 fish는 물속에서 헤엄칠수 있어요');
    
    }
}

//함수명: flyOrSwim
//매개변수 1개: Bird객체 또는 Fish객체가 인수로 들어올수 잇다.
//반환타입:void
export const flyOrSwim=(obj:Bird|Fish):void=>{
    //instansof 연산자를 이용해 타입의 범위를 좁혀보자 ==>타입 가드
    //변수 instanceof 클래스명: 변수가 클래스의 객체이면 true반환,아니면 false 반환
    if(obj instanceof Bird){
        (<Bird>obj).fly(); //타입 단언을 하면 컴파일 타임에는 문제가 없다. 
    }else if(obj instanceof Fish){
        (obj as Fish).swim(); //실행타임에서 에러 발생
    }
}

let b:Bird =new Bird();
let f:Fish =new Fish();
flyOrSwim(b); //타입에러남 ==>타입 가드를 통해 해결
flyOrSwim(f); //타입에러남 ==>


let array:Array<Bird | Fish>=[f,b,new Bird(),new Fish()]
console.log(array);
array.forEach(flyOrSwim);
