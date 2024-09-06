const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const str = `
    <a href="/books"><h2>books (배열을 이용)</h2></a>
    <a href="/api/books"><h2>books ( DB을 이용)</h2></a>
    <a href="/naver/search/books"><h2>books ( naverAPI을 이용)</h2></a>
    `;
    res.send(str);
})
module.exports = router;