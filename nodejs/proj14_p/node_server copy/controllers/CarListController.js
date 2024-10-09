//여러 요청 메서드들을 모아놓은곳 상태코드와 처리결과를 제이슨으로 전달해준다.

//메서드들이 작동할때 다루어질 데이터들은 객체로 관리함 객체를 조작하는 메서들 또한 정의하고있다.
const carDao = require('../models/carModel');

module.exports.getAllCar = async (req, res) => {
    try {
        const carList = await carDao.findAll();
        res
            .status(200)
            .json(carList);
    } catch (error) {
        res.status(500).json({ "message": "getAllCar오류" });
    }
}

module.exports.getCarById = (req, res) => {
    //요청 url에 넘어가는 params데이터에서 뽑아낸다.
    const id = req.params.id
    console.log(id);

    try {
        const car = carDao.findById(id)
        res.status(200).json(car)

    } catch (error) {
        res.status(500).json({ "message": "getCarById 오류" });
    }
}

//post로 보내는건 req 바디에 넣어서 보내짐
//body에 보내지는 내용은 바디파서를 이용하면 쉽게 사용가능함
//미들웨어에서 app.use(express.json())을 했기때문에 바디파서 문법 사용가능함
module.exports.createCar = async (req, res) => {
    //생성될 객체를 미리 구성하고 넘기는게 후처리 작업이 편함
    //일단은 하나만 넘긴다고 처리하자
    //id는 생성될때 따로 dao부분에서 처리하니까 넣지 않는다.
    const newCar = {
        name: req.body.name,
        price: req.body.price,
        maker: req.body.maker
    }
    try {
        await carDao.create(newCar);
        const carList = await carDao.findAll();
        res.status(200).json(carList);
    } catch (error) {
        res.status(500).json({ "message": "createCar 오류" });
    }
}

module.exports.modifyCarById = async (req, res) => {
    //마찬가지로 수정될 객체를 미리 구성하고 넘긴다.
    //dao에서 id로 조회해야되니까 id도 같이 넘긴다.

    // URL 파라미터에서 ID를 가져오고 요청 본문에서 수정할 내용을 가져옴
    const id = req.params.id;
    const updateCar = {
        _id: id,
        name: req.body.name,
        price: req.body.price,
        maker: req.body.maker
    };

    try {
        await carDao.update(updateCar);
        const carList = await carDao.findAll();
        res.status(200).json(carList);
    } catch (error) {
        res.status(500).json({ "message": "modifyCarById 오류" })
    }
}

module.exports.deleteCarById = async (req, res) => {

    const id = req.params.id;

    try {
        const carList = await carDao.delete(id);
        res.status(200).json(carList);
    } catch (error) {
        res.status(500).json({ "message": "deleteCarById 오류" })
    }
}

// 삭제테스트용
module.exports.test = async (req, res) => {
    // res.send("삭제요청됨 테스트 함수임")
    // console.log("삭제요청됨 테스트 함수임"); //이건또 안나오네? 왜?

    // id는 넘어오는거 확인함
    // res.send(id)
    const id = req.params.id;

    try {
        const carList = await carDao.delete(id);
        res.status(200).json(carList);
    } catch (error) {
        res.status(500).json({ "message": "modifyTodoById 오류" })
    }
}
