//자바스크립트가 지원하는 연산자들

//산술연산자(+ - * / %)
let x = 50, y = 10;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x%y);

let name = "남윤호", age = 30, job = "강사";
let info = name + age + job;
console.log(info);

// 복합대입연산자
x += 10;
console.log(x); 
x *= 10;
console.log(x); 
x %= 10;
console.log(x); 

// 증감연산자
x = 10;
x = x + 1;
x++;
console.log(x);
x--;
console.log(x);

//전위 , 후위 연산자
//후위
x= 10;
console.log(x++); //10
console.log(x); //11
//전위
x= 10;
console.log(++x); //11
console.log(x); //11

//비교연산자
x = 10, y = 5;
console.log(x==y);
x = 10, y = 5;
console.log(x!=y);

//일치연산자
let z = "10";
console.log(x == z );   //동등비교
console.log(x === z );   //일치비교

//자바스크립트 연산자는 문자열 비교도 가능(아스키코드로 비교함)
console.log("A" > "1");
console.log("A" > "a");
console.log("남윤호" > "namyunho");
console.log(true > false);

// 논리연산자
x = true,y = false;
console.log(x && y);
console.log(x || y);
console.log(!x);

x = 15;
console.log(x>10 && x<20);


//조건 삼항연산자
let score = 90;
let result = score >= 60 ? "success": "false";
console.log(result);

x = 5, y = 3, z= 7;

let bigger = null;
let bigger2 = null;
let max = null;

bigger =  x>y ? x : y;
bigger2 = y>z ? y: z;
max = bigger>bigger2 ? bigger:bigger2;

console.log(max);


//연산자 우선순위
console.log(10+20*30);
console.log((10+20)*30);

let myName = "남윤호",kor = 50,eng = 100, math =30;
let sum = kor + eng + math;
let avg = sum/3;

console.log(myName+"학생의 설적입니다.");
console.log("총점:"+sum+",평균:"+avg);
