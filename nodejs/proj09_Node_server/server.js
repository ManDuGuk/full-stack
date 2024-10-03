// nodejs에 등록 된 모듈을 불러 온다
const app = require("./app");

//단순히 서버를 실행시켜주는 코드만 있다.
app.listen(app.get('port'), () => {
    console.log(`Server runnig on http://localhost:${app.get('port')}`);
});