/*
dotenv는 Node.js 애플리케이션에서 환경 변수를 쉽게 관리할 수 있도록
해주는 라이브러리입니다.일반적으로 환경 변수를.env 파일에 정의하고,
dotenv 패키지를 사용해 이 파일의 변수를 애플리케이션에 로드하는 방식으로 사용합니다.
이는 API 키, 데이터베이스 연결 정보 등 민감한 정보를 코드에서 분리하고,
환경에 따라 설정을 쉽게 변경할 수 있게 해줍니다.
----------------------------
npm i dotenv--s
설치후
    .env 파일을 생성하자
-----------------------
* .env 파일 내용 *
PORT = 3000
DATABASE_URL = mongodb://localhost:27017/mydatabase
SECRET_KEY = mysecretkey
----------------------------
* 주의사항 *
.env 파일 보안: .env 파일에는 민감한 정보(API 키, 데이터베이스 비밀번호 등)가
포함될 수 있으므로, 이 파일을 절대 버전 관리 시스템(Git 등)에 커밋하지 말아야 합니다.
.gitignore 파일에.env를 추가해 예기치 않게 커밋되는 것을 방지할 수 있습니다.
--------------
* .gitignore 파일 내용 *
.env
-----------
환경에 따른 설정 관리: 개발, 테스트, 프로덕션 환경에 따라 다른.env파일
.env.development, .env.test, .env.production 등으로 파일을 나누고, --> 미리 어느정도 규약적으로 정해져있음. .env 파일 이름도 공식적으로 정해져있는거임 다르게 해줄려서 본인이 따로 설정해줘야됨
각각의 환경에 맞는 설정을 관리할 수 있습니다.
*/

//npm i dotenv --s
const dotenv = require('dotenv');
const express = require('express');

//.env파일을 만들자
dotenv.config();

//.env로드하고 'porcess.env'객체에 추가한다.
//process.env를 이용해 쉽게 접근할수 있다.
const port = process.env.PORT || 3333;
//PORT 환경변수가 없으면 3333으로 할당된다.
console.log(port);
// app.get('/', (req, res) => {
//     res.send('<h1>hello world</h1>')
// })


const app = express();
app.listen(port, () => { //자동으로 해당 포트 번호로 요청을 보내준다는 뜻이 아니라 해당 포트로 요청이 올시 시행 해주겠다는 의미이다.
    console.log(`http://localhost:${port}`);
    console.log(`apikey:${process.env.API_KEY}`);
})
