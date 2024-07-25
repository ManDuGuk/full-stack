//배열의 주요 인스턴스(프로토타입) 메소드 join
let scores = [90, 80, 78, 100, 50];
const strings = scores.join("-");
const strings2 = scores.join();

console.log(strings);
console.log(strings2);

let language = "javascript,java,html,css";

//위의 랭귀지는 기본타입의 문자열인데 .을 딱 찍는순간 스크립트 엔진이 객체로 만들어버린다. 이걸 오토 박싱이라고 한다. 
//그래서 기본타입의 문자열에 .split()를 사용할수 있는것
//원래 메소드를 쓰고 싶으면 객체를 변환하는 과정이 필요한데 자바스크립트가 그걸 매우 쉽게 만들어주는것이다.
let arr = language.split(",");
console.log(arr);
console.log(typeof arr);

//스코어스 자체는 원본자체 배열이 바뀌기 때문에 굳이 리턴받을 필요도 없다.
scores.reverse();
console.log(scores);

//원본 배열을 건드는 것이 아니기 때문에 새로 생성된 배열이 반환된다. 즉 리턴을 받아야 한다.
const newScores = scores.concat(90, 68, 69, 60, [67, 50]);
console.log(newScores);

console.log(scores.slice(0, 2));
console.log(scores.slice());
console.log(scores.slice(-3, -2));

//스플라이스 --> 원본배열을 수정한다. //수정한 요소는 배열에 담아서 리턴해준다.
let deleted = scores.splice(1, 2);
console.log(scores);
console.log(deleted);

//아래처럼함
let added = scores.splice(1, 0, 99);
console.log(scores);
console.log(added);
//아래처럼하면 배열안에 배열이 들어간다.
let added2 = scores.splice(1, 0, [88, 99]);
console.log(scores);
console.log(added2);

scores = [90, 80, 78, 100, 50];

let index = scores.indexOf(100);
if (index < 0) {
    console.log("100점 업습니다.");
} else {
    console.log(scores.slice(index, index + 1));
}

let exist = scores.includes(100);
console.log(exist
);

const sum = function () {

    //argument는 유사배열이다.
    console.log(arguments);

    //유사배열을 배열로 변환
    const nums = Array.from(arguments);
    const nums2 = [...arguments];
    console.log(nums);
    console.log(nums2);
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));

//옛날방식
let str = "123456";
let arrrr = Array.from(str);
// 요즘트렌드
arrrr = [...str];
