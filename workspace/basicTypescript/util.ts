//기능을 갖는 함수들을 모아서 모듈화
//1.function으로 함수 구성
//랜덤한 정수값을 반환하는 함수:makeRandomNum()
//makeRnadomRum()/makeRandomNum(max)/makeRandomNum(max,start)

let MAX = 100;
export function makeRandomNum(max: number = MAX, start: number = 0): number {
    //Math.random():0.0<=r <1.0 사이의 임의의 실수값을 반환
    //5<=r <=20 임의의 정수값 ==> Math.ceil(Math.random()*범위 +시작수)
    // let r:number = Math.ceil(Math.random() * 15 + 5);
    let r:number =Math.ceil(Math.random()*(max-start)+start);
    return r;
}


//2.화살표 함수로 구성
//makePerson() ==> 반환타입 Iperson인터페이스 타입
//매개변수로 name,age
export interface Iperson{
    name:string;
    age:number;
}

export const makePerson = (name:string,age:number=makeRandomNum()):Iperson=>{
    // return {name:name,age:age}
    return {name,age}
}

export const makePerson2=(name:string,age:number=makeRandomNum(30,20)):Iperson=>({name,age})

export const testMakePerson=():void=>{
    let p1:Iperson=makePerson('James');
    let p2:Iperson=makePerson('길동',25);
    let p3:Iperson=makePerson('tommy');
    console.log(p1);
    console.log(p2);
    console.log(p3);
    
}

//--------------------------------
//range(시작값,끝값):배열 =>배열의 전재 연상자(spread)
//range(1,7)==>[1,2,3,4,5,6]
//재귀함수: 자기 함수내에서 자기 함수를 호출하는 경우,잘못구성하면 무한루프에 빠질수 있다.
//반드시 종류조건을 두고 빠져나가도록 해야한다.
export const range = (start:number,end:number):number[]=>{
    let array = start <end?[start,...range(start+1,end)]:[];
    // console.log(array);
    
    return array;
}

console.log("**************************");


// console.log(range(1,7));

export type ResultType=[boolean,string];//튜플타입
