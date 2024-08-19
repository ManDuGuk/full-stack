//자바스크립트 에러의 전파와 에러처리
console.log("프로그램 시작됨");
const foo = function () {
    try {

        // 에러발생
        const number = 10;
        console.log(number.substring(0, 1));
    } catch (error) {
        //처리해줄수있는것만 처리하고
        if (error instanceof ReferenceError) {
            console.log("에러 처리");
        } else {
            //처리를 호출한곳으로 넘김
            throw error;
        }
    }
}
//에러가 호출자로 전파
const bar = function () {
    foo();
    console.log("bar 실행됨");
}

//에러가 전역 호출자에 전파
try {

    bar();
} catch (error) {
    console.log(error.message);
    console.log("전역에서 에러 처린");
}

//에러를 발생시키는 구문이 여러개라면 에러를 처리해주는 catch가 여러개 필요하다. 각 다른 에러에 따라 다른 처리가 되어줄 필요가 있으니
// try {

// } catch (error) {
//     // console.log(error);
//     // console.log(error.name);
//     // console.log(error.message);
//     // console.log(error.stack);

//     if (error instanceof ReferenceError) {
//         console.log("레퍼런스 처리");
//     } else if (error instanceof TypeError) {
//         console.log("타입 처리");
//     } else {
//         console.log("범용 처리");

//     }
// } finally {
//     //주로 비용이 많이 드는 리소스 메모리를 해제할때 쓰인다..
//     console.log("나는 항상 실행됨");
// }

console.log("프로그램 종료됨");