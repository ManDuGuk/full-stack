const express = require('express')
const app = express();
//정적인 파일들을 인식시키도록 static 미들웨어를 사용하자 html 파일도 포함해서 그냥 서버에서 호출하면 인식하지 못한다.
//express.static()==> 정적인 파일들의 경로를 설정할수 있다. 
//브라우저에서 접근가능하다. 다만 요청 주소를 보낼때 public은 포함되지 않음에 주의
//http://localhost:5555/images/login.png
//미들웨어를 상요할때는 use를 쓴다.
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/*')); //이렇게는 안되네.. 그냥 최상위에 걸고싶은데


app.get('/index', (req, res) => {
    //fs.readFile()이용해서 'public/index.html'을 가져와서 보여주기
    //대신 res.sendFile()을 사용할수 있다.
    console.log(__dirname);
    console.log(__dirname + '/public/index.html');
    res.sendFile(__dirname + '/public/index.html');
})

//'/lgin' ==> 'login.png'
app.get('/login', (req, res) => {
    // res.sendFile(__dirname + '/public/images/pepe01.jpg');

    const str = `<h1>login</h1>
    <img src="/images/pepe01.jpg">
    `;
    res.send(str);
})
app.get('/board', (req, res) => {
    res.sendFile(__dirname + '/public/images/pepe02.jpg');

})

app.listen(5555, () => {
    console.log('http://localhost:5555');

})