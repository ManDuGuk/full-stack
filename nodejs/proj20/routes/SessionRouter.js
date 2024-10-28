//routers/SessionRouter.js
//session을 사용하기 위해서는
//express-cookie와 express-session 모듈 필요

const express = require('express');
const router = express.Router();

//server.js에 session 미들웨어 등록필요

//로그인 처리 - 세션에 정보를 저장
router.route("/login").post((req, res) => {
    console.log("post /session/login 처리");

    //세션에 사용자 정보 등록
    //데이터베이스의 사용자 정보와 비교후 세션 처리
    const userId = req.body.id;
    req.session.user = {
        id: userId,
        name: '홍길동',
        atuorized: true
    }
    res.end("post/session/login");
    //로그인 성공후 상품페이지로 이동하는 링크 추가
});

//로그아웃 처리 - 세션에 저장된 정보 제거
router.route("/logout").get((req, res) => {
    console.log("get /session/logout 처리");
    // if (req.session.user) {
    //     console.log("로그인 정보 >>");
    //     console.dir(req.session.user);

    // }
    // res.end("get /session/logout");

    // if (req.session.user) {

    //     //로그인 되었다면 세션의 정보를 초기화
    //     req.session.user = null;

    // } else {
    //     //로그인이 안되었다면 로그인 페이지로 리다이렉트 된다.
    //     res.redirect("/LoginForm.html");
    // }


    if (req.session.user) {
        // 세션을 완전히 제거
        req.session.destroy(err => {
            if (err) {
                console.error(err);
                res.status(500).send("로그아웃 실패");
                return;
            }
            // 로그아웃 성공 후 로그인 페이지로 리다이렉트
            res.redirect("/LoginForm.html");
        });
    } else {
        // 로그인 상태가 아니면 로그인 페이지로 리다이렉트
        res.redirect("/LoginForm.html");
    }
});

//상품 보기 -- 먼저 로그인을 해야 상품을 볼수 있다.
router.route("/product").get((req, res) => {
    console.log("get /session/product 처리");
    if (req.session.user) {
        //로그인 되었다면 상품페이지로 이동
        // res.end("get /session/product");
        req.app.render('product', { carList: ProductList }, (err, html) => {
            if (err) throw err
            res.end(html);
        })
    } else {
        //로그인이 안되었다면 로그인 페이지로 리다이렉트 된다.
        res.redirect("/LoginForm.html");
    }
});


//상품목록에서 임시로 사용할 데이터
const ProductList = [
    { id: 1, name: 'sonata', price: 2500 },
    { id: 2, name: '그랜저', price: 3500 },
    { id: 3, name: '볼보', price: 4500 },
    { id: 4, name: '케이세븐', price: 2500 },
    { id: 5, name: '케스퍼', price: 200 },
    { id: 6, name: '마티즈', price: 500 },
]


//장바구니 목록.
router.route("/cart").get((req, res) => {
    console.log("get /session/cart 처리");
    if (req.session.user) {
        //로그인 되었다면 장바구니 페이지로 이동

        let cartList = [];
        if (req.session.cartList) {
            cartList = req.session.cartList;
        } else {
            req.session.cartList = cartList;
        }

        const idx = ProductList.findIndex((car, index) => {
            return car.id == Number(req.query.id);
        });
        if (idx != -1) {
            cartList.push(ProductList[idx]);
        }
        // console.log(cartList);

        req.app.render('cart', { cartList: cartList }, (err, html) => {
            if (err) throw err
            res.end(html);
        })
    } else {
        //로그인이 안되었다면 로그인 페이지로 리다이렉트 된다.
        res.redirect("/LoginForm.html");
    }
});

module.exports = router;