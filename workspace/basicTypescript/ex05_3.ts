//myutil/util 모듈에서 함수를 impot하세요
import {makeRandomNum,makePerson,makePerson2,testMakePerson,range} from './util';

//range() 이용해서 1<=num<101 사이의 값을 갖는 배열을 만드세요
let array=range(1,101);
// console.log(array);


//배열의 filter()함수를 이용해서 홀수만 담긴 배열을 만드세요
const isOdd = (value:number):boolean=>{
    //홀수 여부를 판단하는 함수
    return (value%2!==0);
}

const oddArray:number[] =array.filter(isOdd);
// console.log(oddArray);


const evenArray:Array<number>=array.filter((value,i)=>value%2===0)
// console.log(evenArray);

//filter() 함수는 원본 배열을 훼손하지 않으면서 조건에 맞는 요소들만 걸러낸다.
//==> 삭제할때 : splice() 함수,filter() 함수를 이용해도 된다.

//1~10까지의 배열을 만들고
//이 배열에서 5를 삭제하고 싶다. filter이용해서 5를 제외한 나머지 배열을 출력
let array2 =range(1,11);
console.log("*************");
let result =array2.filter((value)=>value!==5);
// console.log(result);

//nums 배열요소들의 제곱값을 담은 배열을 생성해서 출력해보라 ==> map함수
let numSquare = array2.map((value)=>Math.pow(value,2));
console.log(numSquare);


//nums 배열요소들의 제곱근을 담은 배열을 생성해서 출력: Math.sqrt()==> 제곱근을 구하는 함수
let numsSqrt:string[] = array2.map((value):string=>Math.sqrt(value).toFixed(1));
console.log(numsSqrt);

//[원래값(number),제곱근 값(소수점 1자리-string)]
//==> Tuple타입으로 
type Tuple = [number,string]; //튜플 타입 정의
let numsSqr2:Tuple[] =array2.map((value)=>[value,Math.sqrt(value).toFixed(1)])
console.log(numsSqr2);

