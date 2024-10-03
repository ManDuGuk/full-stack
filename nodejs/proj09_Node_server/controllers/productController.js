//여러 요청 메서드들을 모아놓은곳 상태코드와 처리결과를 제이슨으로 전달해준다.

//메서드들이 작동할때 다루어질 데이터들은 객체로 관리함 객체를 조작하는 메서들 또한 정의하고있다.
const ProductDAO = require('../models/productModel');

// 한 페이지에 여러 모듈 등록 가능
module.exports.getAllProducts = (req, res) => {
    try {
        const products = ProductDAO.findAll();
        //res.send(productList);

        // 라우터랑 비슷하게 메서드 체이닝
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ "message": "getAllProducts 오류!" });
    }
}

module.exports.getProductById = (req, res) => {
    const id = req.params.id;
    console.log('>>> 특정 상품 조회 id:', id);
    try {
        const products = ProductDAO.findById(id);
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ "message": "getProductById 오류!" });
    }
}

//req.body.name 이런건 미들웨어 app.use(express.json());를 사용했기때문에 쓸수 있는것이다.
module.exports.createProduct = (req, res) => {
    // 생성시에는 미리 여기서 객체를 구성하고 넘겨줘야지 편하긴 할꺼 같다. 나중엔 이런걸 vo로 처리하던것 같던 기억도 난다.
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
        company: req.body.company,
        year: req.body.year
    }
    console.log(newProduct);
    try {
        ProductDAO.create(newProduct);
        const products = ProductDAO.findAll();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ "message": "getProductById 오류!" });
    }
}

module.exports.modifyProductById = (req, res) => {
    console.log('특정 상품 수정');
    const id = req.body.id;
    const updateProduct = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        company: req.body.company,
        year: req.body.year
    };

    try {
        ProductDAO.update(id, updateProduct);
        const products = ProductDAO.findAll();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ "message": "getProductById 오류!" });
    }
}

module.exports.deleteProductById = (req, res) => {
    console.log('>>> 특정 상품 삭제 id:', req.params.id);
    try {
        ProductDAO.delete(req.params.id);
        const products = ProductDAO.findAll();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ "message": "getProductById 오류!" });
    }
}