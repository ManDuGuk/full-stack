//자바스크립트 엔진의 기본 오류 처리
console.log("프로그램 시작됨");


//에러를 발생시키는 구문이 여러개라면 에러를 처리해주는 catch가 여러개 필요하다. 각 다른 에러에 따라 다른 처리가 되어줄 필요가 있으니
try {

    const number = 10;
    // --> 2.레퍼런스 에러, 실행단계에서 오류처리됨
    console.log(name);
    console.log(number.substring(0, 1));
} catch (error) {
    // console.log(error);
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);

    if (error instanceof ReferenceError) {
        console.log("레퍼런스 처리");
    } else if (error instanceof TypeError) {
        console.log("타입 처리");
    } else {
        console.log("범용 처리");

    }
} finally {
    //주로 비용이 많이 드는 리소스 메모리를 해제할때 쓰인다..
    console.log("나는 항상 실행됨");
}

console.log("프로그램 종료됨");