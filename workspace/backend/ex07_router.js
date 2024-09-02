const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));
//http://localhost:7777/main.html로 접근가능

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

app.listen(7777, () => {
    console.log('http://localhost:7777');

})