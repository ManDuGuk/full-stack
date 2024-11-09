//변수선언과 타입지정
let age:number = 25;
let myname:string = 'alice';
let isStdudent:boolean = true;
let nothing :null = null;
let noDefined:undefined;
let uniqueSymbol:symbol = Symbol('id');
let largeNumber:bigint = BigInt(90000000000000);

//배열타입
let scores:number[] = [80,90,85];

//인터페이스
//객체의 구조를 정의할때 사용한다. 객체의 프로퍼티와 메서드를 설명하기 위해 만들어졌다. 타입체크를 위한 청사진이라고 보면된다.
//인터페이스는 extends 키워드를 사용해서 인터페이스를 확장하거나 결합할수 있다.
interface Person{
    name:string;
    age:number;
}

let person:Person={
    name:'ace',
    age:34
}

//타입앨리어스
//복잡한 타입을 간단하게 정의할수 있다.
//특정 타입에 별칭을 붙여서 코드를 더 깔끔하고 이해하기 쉽게 만든다고 한다.
//원시타입,유니온 타입, 튜플등 다양한 복잡한 타입을 정의하는데 사용한다.
type Point = {
    x:number;
    y:number;
};

let p:Point = {x:10,y:20};

//유니온 타입
//변수에 여러 타입을 허용할수 있다.
let value:string|number;
value = 'hello';
value = 42;



//함수변수와 매개변수 타입
//옵셔널 매개변수는 ?를 사용하여 선택적 매개변수로 선언가능
function greet(name:string,age?:number):string{
    return `hello,${name}`+(age?`,age${age}`:'');
}

//제네릭
//재사용 가능한 컴포넌트를 만들때 사용된다.
function identity<T>(arg:T):T{
    return arg;
}

//클래스
//접근제어자를 사용할수 있다.
class Animal{
    protected name:string;

    constructor(name:string){
        this.name = name;
    }

    public speak():void{
        console.log(`${this.name} make a noise`);
    }
}

class Dog extends Animal{
    speak():void{
        console.log(`${this.name} barks`);
    }
}

let dog = new Dog("rex");
dog.speak();


//비동기 프로그래밍
//promise와 async/awiat는 typescipt에서도 동일하게 사용됨
const fetchData = ():Promise<string>=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully");
        },1000);
    });  
};

async function getData(): Promise<void>{
    let data:string = await fetchData();
    console.log(data);
    
}

getData();

//타입단언
//특정 타입임을 컴파일러에게 알려줄수 있다.
let someValue:unknown ='this is a string';
let strLength:number = (someValue as string).length;