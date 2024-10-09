const mongoose = require('mongoose');
// 기본 27017 포트에 myapp이 디비 이름임
mongoose.connect('mongodb://localhost:27017/myapp', {
    // 아래 옵션들은 기본으로 해주는걸로 바뀌었기때문에 불필요함
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log("몽고디비 연결됨");
}).catch(err => console.log(err));

//스키마 생성
const carSchema = new mongoose.Schema({
    // id는 자동생성(난수)된다고 하니까 생성번호를 대신만들자
    num: Number,
    name: String,
    maker: String,
    price: Number
})

const Car = mongoose.model('Car', carSchema);


Car.find()
    .then((result) => console.log(result))
    .catch(err => console.log(err));


//임시로 설정한 자료
// let carList = [
//     { id: 1, name: "차1", maker: "현대1", price: 1000 },
//     { id: 2, name: "차2", maker: "현대2", price: 2000 },
//     { id: 3, name: "차3", maker: "현대3", price: 3000 },
//     { id: 4, name: "차4", maker: "현대4", price: 4000 },
// ];

let autoId = 5;

// //create테스트
// const temp = { title: "과일먹기" }

// //update
// const temp2 = { id: 1, title: "수정때리멕이기" }

// //delete
// const temp3 = { id: 2, title: "수정때리멕이기" }


// 여기서 넘어온 객체가지고 각종 연산처리
const carModel = {
    findAll: async () => {
        try {
            return await Car.find()
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    findById: async (id) => {
        try {
            return await Car.find({ _id: mongoose.Types.ObjectId(id) })
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    create: async (obj) => {
        try {
            // Mongoose 모델의 인스턴스 생성
            const newObj = new Car({ ...obj, num: autoId });
            await newObj.save();
            ++autoId;
            return "car 생성되었음";
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    update: async (obj) => {
        try {
            const { _id } = obj;
            let result = await Car.findByIdAndUpdate(_id, obj)
            if (result.modifiedCount === 0) {
                return "Car not found";
            }
            return "update complete"
        } catch (error) {
            console.log(error);
            return "update not rigth query";
        }
    },
    delete: async (id) => {

        // return id

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return "Invalid ID format";
        }

        // else {
        //     //위에 걸리지 않는걸 봐선 형식이 잘못된건 아님
        //     return id;
        // }

        try {
            const result = await Car.deleteOne({ _id: id });
            if (result.deletedCount === 0) {
                return "Car not found";
            }
            // 성공적으로 처리되었다면 전체목록을 반환
            return await Car.find();
            // return "Car deleted successfully"
        } catch (error) {
            console.error(error);
            return "Error deleting car";
        }
    }

}

// 함수 작동 테스트
// console.log(todoDao.findById(1));
// console.log(todoDao.create(temp));
// console.log(todoList);

// console.log(todoDao.update(temp2));
// console.log(todoList);

// console.log(todoDao.delete(temp3));
// console.log(todoList);



module.exports = carModel;