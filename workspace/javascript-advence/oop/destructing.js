
const member = {
    name: "남윤호",
    age: 30,
    speak() {
        //객체에서의 this는 할당된 자신을 가르킨다.
        console.log(this.name);
    }

};

//일반적인 접근방식
member.name;
// member[name];
console.log(member.name);

//구조분해 할당(데이터를 분해할때 쓰인다. 메소드를 분리할때는 this처리가 필요함)
//구조분해 할당시 --> 함수를 떼오면 함수안에 있던 this가 가르키는 범위가 달라지기 때문에 그렇다.
const { myName, age, speak } = member;
//구조분해 할당하면 접근할때 좀더 심플해진다.

console.log(myName);
speak(); // 이렇게 호출하면 speak()안에 this가 글로벌 객체를 가르키게 되서 undefined처리가 된다.
member.speak();

function hello() {
    //함수안에서의 this는 글로벌 객체를 가르킨다.
    console.log(this); //여기도 마찬가지로 함수 자체를 가르키는 경우이고 호출시 this가 클로벌을 가르키게 된다.
}

hello();

// 전역코드에서 this는 모듈객체를 가르키낟.
console.log(this);


// 가르키는게 전부 다름
//1.객체안에서의 this --> 할당된 자신
//2.함수안에서의 this --> 글로벌객체
//3.전연코드에서의 this -->모듈객체


//위에 있는 콘솔로그 지울때
console.clear();

//배열 구조 분해 할당
const array = ["월요일", "화요일", "수요일"];
const [mon, tue, wen] = array;
console.log(mon);


let x = 10, y = 20;
// let temp = x;
// x = y;
// y = temp;
console.log(`x값: ${x}, y값: ${y}`);

//구조분해 활용
const [a, b] = [y, x];
console.log(`a값: ${a}, b값: ${b}`);


//중첩 객체 구조 분해 할당
const student = {
    name: "남윤호",
    score: {
        kor: 85,
        eng: 70,
    },
    friends: ["박찬호", "이재용"],
};

//일반호출
console.log(student.score.kor);
console.log(student.friends[0]);

//구조분해 할당
const { name, score: { kor, eng }, friends: [f1, f2] } = student;
console.log(name);
console.log(kor);
console.log(f1);