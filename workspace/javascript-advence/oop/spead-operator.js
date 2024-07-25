const myDog = {
    name: "루니",
    age: 9,
    eat: function () {
        console.log("잘먹습니다.");
    },
};

const cat = {
    xyz: "미야옹"
}

//이런식으로 해버리면 객체안에 참조변수가 들어가버린다.
// const yourDog = {myDog};


//깊은(deep) 복사
const yourDog = { ...myDog };
console.log(yourDog);

//합성해서 깊은 복사
const yourDog2 = { ...myDog, ...cat };
console.log(yourDog2);

//옛날엔 아래와 같은 방식도 있었다..

const thatDog = Object.assign(myDog);
console.log(thatDog);
