//range()함수 import하기
import {range} from '../myutil/util'

//range() 이용해서 1<=num<101사이의 값을 값는 배열을 만드세요
let array=range(1,101);
// console.log(array);

//배열의 filter() 함수 이용해서 홀수만 담긴 배열을 만드세요
const isOdd=(value:number):boolean =>{
    //홀수 여부를 판단하는 함수
    return (value%2!==0);
}

const oddArray:number[] = array.filter(isOdd);
//console.log(oddArray);

const evenArray:Array<number> = array.filter((value,i)=> value%2===0)
// console.log(evenArray);

//filter()함수는 원본 배열을 훼손하지 않으면서 조건에 맞는 요소들만 걸러낸다
//==> 삭제할 때 : splice() 함수, filter()함수 이용해도 된다

//1~ 10까지의 배열을 만들고 
//이 배열에서 5를 삭제하고 싶다. filter이용해서 5를 제외한 나머지 배열을 출력
 let nums =range(1,11);
 console.log(nums);
 let filterNums = nums.filter((value)=> value!==5);
 console.log('-----------');
//  console.log(filterNums);
 console.log('-----------');
//  console.log(nums);
 
 //nums 배열요소들의 제곱값을 담은 배열을 생성해서 출력하세요==>map()
 let numsSquare = nums.map((value)=> Math.pow(value,2));
 console.log(numsSquare);
 

 //nums 배열요소들의 제곱근을 담은 배열을 생성해서 출력하세요 : Math.sqrt() ==> 제곱근 구하는 함수
 let numsSqrt:string[] = nums.map((value):string=> Math.sqrt(value).toFixed(1));
 console.log(numsSqrt);
 
 //[원래값(number), 제곱근 값(소수점 1자리-string)]
 //===> Tuple타입으로
 type Tuple = [number, string]; //튜플 타입 정의
 let numsSqrt2:Tuple[] = nums.map((value)=> [value, Math.sqrt(value).toFixed(1)]);
 console.log(numsSqrt2);
 