let myname:string="김철수";
console.log(myname);

myname="10";
console.log(myname);

function sayHello(person:string):string{
    return "Hello ~ "+person;
}
console.log(sayHello("Thomas"));
/* 설치 
//[1] npx tsc --init
//[2] npm install -g ts-node
//[3] npm install typescript @types/node
*/