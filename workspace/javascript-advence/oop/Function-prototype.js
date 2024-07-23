//남이 만든 라이브러리라 가정
function doTask() {
    console.log(this); //object[global] --> 글로벌객체(전역객체,브라우저에서는 윈도우 객체)

    //참고적으로 global이랑 globalthis랑 같은 문법이다. 차이는 브라우저에서도 쓸수 있는 통용문법은 globalthis이다.
    global.console.log("출력"); // 콘솔이라는 문법도 글로벌 객체에 있는 객체인걸 확인할수 있다.

    console.log(`이름: ${this.name},나이: ${this.age}`); //해당 this는 가르키는게 없으니 undefined가 된다.
    //call(),apply)(),bin()같은 간접호출을 쓰면 this가 넣어진 전역 함수도 호출해서 쓸수 있다.
}

const person = {
    name: "남윤호",
    age: 10,
    doTeach: function () {
        console.log("강의합니다.");
    }
};

//직접호출하지 말고
//doTask();

//간접호출한다. 
//이러면 person객체의 메소드 같이 작동한다.
doTask.call(person);

console.log("----------------------------------------------------");
//범용 메소드
//-------------------------------------------call() 활용
function addProperty(name, value) {
    this[name] = value;
}


//직접호출
addProperty("grade", 5);
console.log(globalThis.grade);

//간접호출(call)
addProperty.call(person, "grade", 3);
console.log(person.grade);

//간접호출(apply)
addProperty.apply(person, ["address", "서울"]);
console.log(person);

//간접호출(bind)-->묵여진 메소드를 리턴해준다. 여러번 추가할수 있어서 지속적으로 호출해서 쓰기 좋다.
const returnMethod = addProperty.bind(person);
returnMethod("값추가", "yyy");
returnMethod("객체추가", { dogname: "루니" });
console.log(person);
