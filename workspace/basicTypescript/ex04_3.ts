import{ INameable,ITelable}from './INameable'

let obj1:object = {name:'남윤호'}
let obj2:object = {tel: '1234-213'};
let obj3:object = {name:'이철수',tel:'101=123'}

console.log((<INameable>obj1).name); //타입단언
console.log((<ITelable>obj2).tel); //타입단언
console.log((obj3 as INameable).name); //타입단언
console.log((obj3 as ITelable).tel); //타입단언
