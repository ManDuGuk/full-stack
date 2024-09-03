const express = require('express');
const app = express();

//미들웨어 설정
app.use(express.static(__dirname + "/public"));
//http://localhost:7777/main.html로 접근가능

//application/json형태의 요청데이터를 받도록 미들웨어 설정
//예전에는 body-parser 모듈을 설치해서 동일한 설정을 했었음
app.use(express.json())

//userId=a&userPw=b 식으로 데이터가 올때 요청의 본문을 파싱하도록 하는 미들웨어
//content-type이 'application/x-www-form-urlencoded'인 요청
//extended:false로 설정하면 querystring모듈을 이용해서 파싱한다.
//true로 설정하면 qs 모듈을 이용해서 파싱한다.
app.use(express.urlencoded({ extended: false }))//j


app.get('/main', (req, res) => {
    // 그냥 /로 설정해버리면 여기서 설정을 main으로 해줘도 자동으로 index.html로 자동 매칭된다.
    res.sendFile(__dirname + 'public/main.html');
})

/*
 * 클라이언트가 보낸 데이터 받는법
1.query string 데이터: req.query로 받는다.(get방식)
2.요청 경로에 포함된 데이터:req.params로 받는다. 
3.post방식으로 요청된 데이터: req.body로 받는다. ==> 설정 필요(express body-parser);
 */
app.get('/api/users', (req, res) => {
    //page,per_page값 받기 
    console.log('req.query', req.query);
    const { page, per_page } = req.query;
    //req.query.page, req.qeury.per_page로 접근해도된다. 

    const str = `<h3>page:${page},</h3>
    <h3>page number:${per_page},</h3>
    <br><a href="/main">to main</a>
    `
    res.send(str);
})


app.get('/api/board/:no', (req, res) => {//:no==> 동적 세그먼트 콜론붙이고 변수명은 마음대로 가능,
    //여러개를 받을수도 있다, :category:nuber  이런식으로 여러가지로 쓸수 있다. 
    //page,per_page값 받기 
    console.log('req.params', req.params);
    const { no } = req.params;
    res.send(`<h3>${no}번 게시글을 보여줄게요</h3>`)
})

//get방식으로 signin요청이 들어오면 res.sendFile()이용해서 signin.html 보여주세요
app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/public/signin.html'); //signinProc
})

//ajax이용 비동기
app.get('/signin2', (req, res) => {
    res.sendFile(__dirname + '/public/signin2.html'); //signinProc
})


//get방식의 form
app.get('/signinProc', (req, res) => {
    //qeury스트링을 추출해서 응답을 보내주되 id가 killer라는 내용르 가지고 있으면 405상태코드 보여주세요
    //killer를 제외한 id면 '환영합니다.id님 '
    const { userId, userPw } = req.query;
    if (userId === "killer") {
        res.status(405).send('안된다 이놈아');
    } else {
        res.send(`환영합니다. ${userId}님`);
    }
})

//post방식 form
app.post('/signinProc2', (req, res) => {
    //request의 body부분에 데이터를 포함시켜 요청을 보낸다.
    console.log(req.body);//post방식의 데이터를 받을때 :req.body를 이용
    const { userId, userPw } = req.body;
    if (userId === "killer") {
        res.status(405).send('안된다 이놈아');
    } else {
        res.send(`환영합니다. ${userId}님`);
    }
})

//post방식 form
app.post('/signinProc3', (req, res) => {
    //request의 body부분에 데이터를 포함시켜 요청을 보낸다.
    console.log(req.body);//post방식의 데이터를 받을때 :req.body를 이용
    const { userId, userPw } = req.body;
    if (userId === "killer") {
        //json형태의 응답을 보내고자 할때는 res.json()함수를 이용
        res.json({ 'status': 405, 'message': 'fail 킬러는 안되' })
    } else {
        res.json({ 'status': 200, 'message': `${userId}님 환영해요` })
    }
})

//위의 모든 요청을 제외한 모든 요청에 일단 적용을 되는데 특정 호출을 먼저 한다면 그걸 우선처리하게 만들어 진다. 
//위의 모든 요청을 포함한 모든 요청에는??? --> 미들웨어로 처리
app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 해당 페이지는 없습니다.</h1>`);
})





app.listen(7777, () => {
    console.log('http://localhost:7777');

})