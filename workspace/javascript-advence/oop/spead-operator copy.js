// const myDog = {
//     name: "루니",
//     age: 9,
//     eat: function () {
//         console.log("잘먹습니다.");
//     },
// };

const test = function () {
    console.log(arguments);
    const nums = Array.from(arguments);
    console.log(nums);
}
test(1, 2, 3, 4);

const 유사배열 = {

    0: "루니",
    1: 15,
    2: "루니",

};
console.log(유사배열);
const nums2 = [...유사배열];

//유사배열을 배열로 변환
// const nums = Array.from(arguments);
// const nums2 = [...arguments];

// const cat = {
//     xyz: "미야옹"
// }

// //이런식으로 해버리면 객체안에 객체를 가르키는 참조변수를 넣는꼴이다.
// const yourDog1 = { myDog };
// console.log(yourDog1);


// //깊은(deep) 복사
// const yourDog = { ...myDog };
// console.log(yourDog);
// // console.log([...유사배열]);
// console.log({ ...myDog });
// console.log(`yourDog: ${yourDog}`);

// //합성해서 깊은 복사
// const yourDog2 = { ...myDog, ...cat };
// console.log(yourDog2);

// //옛날엔 아래와 같은 방식도 있었다..

// const thatDog = Object.assign(myDog);
// console.log(thatDog);
