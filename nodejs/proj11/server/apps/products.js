const express = require("express");
const app = express();
const cors = require('cors');
const router = express.Router();
// products
//컨트롤러에서 정의된 메소드들 라우터로 가져와서 관리
const { getAllProducts, getProductById, createProduct, deleteProductById, modifyProductById }
    = require('../controllers/productController');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

//라우터 메소드 체이닝
//get방식으로 요청되면 모든 목록을 가져오는거고, post면 새로 만드는 요청임
router.route('/products').get(getAllProducts)
    .post(createProduct);

//get 방식으로 요청되면 id로 조회하고 post는 수정하고 del은 삭제하고
router.route('/products/:id').get(getProductById)
    .post(modifyProductById)
    .delete(deleteProductById);

module.exports = app;