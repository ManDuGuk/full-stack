/**
 * 계좌 관리 객체
 */
// 마이너스 계좌도 한다
// 계좌의 CRUD
// 객체로 넘어온 값을 받아서 배열로 관리해야 한다.

class AccountRepository {
    constructor(account) {
        // 빈배열을 하나 만들어 줘서
        this.account = [];
    }


    //계좌를 관리하는 주요기능들 --> 여기서 배열을 만들어주면 좋을듯? 그리고 리턴으로 배열을 넘겨주면 좋을듯?
    //신규 계좌 등록(중복시 등록안되게하라)
    addAccount(info) {

        let 사용자테이블 = this.account;


        //처음 등록한 계좌는 중복 체크를 건너뛴다.
        if (사용자테이블.length === 0) {
            사용자테이블.push(info)
            return console.log("계좌등록 완료");
        } else {
            //처음이 아닐시
            //마지막으로 넣은 계좌의 계좌번호
            let 검사할계좌번호 = 사용자테이블[사용자테이블.length - 1].number;
            //계좌는 배열에 객체들이 담겨있다.
            //마지막 계좌를 제외한 계좌들을 돌면서 계좌번호를 불러온다.
            for (let i = 0; i < 사용자테이블.length - 1; i++) {
                if (검사할계좌번호 === 사용자테이블[i].number) {
                    return console.log("중복된 계좌가 있습니다.");
                } else {
                    사용자테이블.push(info);
                    return console.log("계좌 등록 완료");
                }

            }

        }
    }

    // //전체계좌 목록 반환
    // findByAll() {
    //     //복사본 반환
    // }

    // //계좌번호로 조회하여 반환
    // findByNumber(number) {

    // }

    // // 예금주명으로 조회하여 반환
    // findByName(number) {

    // }

    // 모든 계좌의 총금액 반환--1개
    // 계좌 잔액중에서 최대값 반환 --1개
    // 계좌 잔액중에서 최소값 반환 --1개
    // 특정 범위의 잔액조회
    // 이름을 받아 계좌의 예금주명 수정
    // 계좌번호를 입력받아 해당 계좌 삭제
}

module.exports = AccountRepository;