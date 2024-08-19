const fs = require('fs').promises;
const constants = require('fs').constants;


fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK)
    .then(() => {
        return Promise.reject("이미 폴더 있음");
    })
    .catch((e) => {
        //파일을 찾을수가 없다면 해당 코드 에러가 발생
        if (e.code === "ENOENT") {
            console.log("폴더없음");
            //폴더 만들어주기 근데 왜 리턴?--> 리턴하면 다시 프로미스로 반환 --> 케치문을 아예나가게 된다.
            return fs.mkdir("./folder");
        }
        //에러로그를 다시 reject에 담아서 반환해줌
        return Promise.reject(e);
    })
    .then(() => {
        console.log("폴더만들기 성공");
        return fs.open("./folder/file.js", "w") //파일 아이디를 리턴
    })
    .then((fid) => {
        console.log("빈 파일 만들기 성공", fid);
        return fs.rename("./folder/file.js", "./folder/newfile.js")
    })
    .then(() => {
        console.log("이름 바꾸기 성공");
    })
    //에러를 다시 던저줄때는 예상치 못한 참조가 이루어 지지 않도록 매개변수의 이름을 바꿔주는 편이 좋다고 한다. 
    .catch((err) => {
        console.error(err);
    })

// const fs = require('fs').promises;
// const constants = require('fs').constants;

// fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK)
//     .then(() => {
//         return Promise.reject("이미 폴더 있음");
//     })
//     .catch((error) => {
//         if (error.code === "ENOENT") {  // 여기서 e를 사용합니다
//             console.log("폴더없음");
//             return fs.mkdir("./folder");
//         }
//         return Promise.reject(error);
//     })
//     .then(() => {
//         console.log("폴더만들기 성공");
//         return fs.open("./folder/file.js", "w") // 파일 디스크립터 반환
//     })
//     .then((fid) => {
//         console.log("빈 파일 만들기 성공", fid);
//         return fs.rename("./folder/file.js", "./folder/newfile.js")
//     })
//     .then(() => {
//         console.log("이름 바꾸기 성공");
//     })
//     .catch((errorENOENT) => {
//         console.error(errorENOENT);  // 오류 메시지를 제대로 출력
//     });
