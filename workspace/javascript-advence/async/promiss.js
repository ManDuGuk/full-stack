const promise = new Promise((resolve, reject) => {
    //서버 통신
    const ok = true;
    if (ok) {
        const message = "안녕하세요"

        resolve(message);
    } else {
        reject(new Error("문제있음"));
    }
});

//소비자 코드
//비동기로 promise로 부터 데이터 소비
//프로미스의 메소드는 호출되면 다시 promise를 리턴하므로 체이닝이 가능하다.
promise.then((message) => {
    // console.log(message);
    // 기존의 프로미스에 resolve("안녕하세요...김기정") 
    return message + "김기정님";
})
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            //서버 비동기 통신
            const list = [
                {
                    title: "게시판제목1", content: "내용1"
                },
                {
                    title: "게시판제목1", content: "내용1"
                },
                {
                    title: "게시판제목1", content: "내용1"
                },
            ];
            const json = JSON.stringify(list);
            const list2 = JSON.parse(json);
            resolve(list2);
        })
    })
    .then((list) => {
        console.log(list);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("항상 실행되는 코드 영역");
    })
