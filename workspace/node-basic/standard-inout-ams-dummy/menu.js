class Menu {
    // 처음 시작 메뉴
    start = function () {
        console.log(`====================================================================`);
        console.log(`--------------     KOSTA 은행 계좌 관리 프로그램     ---------------`);
        console.log(`====================================================================`);
    }

    // 메뉴 출력
    category = function () {
        console.log("--------------------------------------------------------------------");
        console.log("1.계좌등록 | 2.계좌목록 | 3.예금 | 4.출금 | 5.검색 | 6.삭제 | 7.종료 99.더미읽기");
        console.log("--------------------------------------------------------------------");
    }

    //계좌 등록 종류 선택
    selectAccount = function () {
        console.log("--------------------------------------------------------------------");
        console.log("[등록 계좌 종류 선택]\n")
        console.log("1.입출금계좌 | 2.마이너스계좌");
        console.log("--------------------------------------------------------------------");
    }

    // 계좌 등록 확정시
    confirmAccount = function () {
        console.log("--------------------------------------------------------------------");
        console.log("1.계좌생성 | ");
        console.log("--------------------------------------------------------------------");
    }

}

module.exports = Menu;