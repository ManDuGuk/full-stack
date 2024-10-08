//몽고 디비 연결 테스트
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

//아래와 같은 비동기 처리는 순서가 보장되지 않음으로 await으로 처리할것!!
//데이터 저장
// (async () => {
//     try {
//         await Car.insertMany([
//             { num: 1, name: "차1", maker: "현대1", price: 1000 },
//             { num: 2, name: "차2", maker: "현대2", price: 2000 },
//             { num: 3, name: "차3", maker: "현대3", price: 3000 },
//             { num: 4, name: "차4", maker: "현대4", price: 4000 }
//         ])
//     } catch (error) {
//         console.log(error);
//     }
// })()


Car.find()
    .then((result) => console.log(result))
    .catch(err => console.log(err));

// 모든 데이터 삭제 위에 생성문을 저장할때마다 중복저장됨 ㅋㅋ
// Car.deleteMany({})
//     .then(() => console.log("모든 데이터가 삭제되었습니다."))
//     .catch(err => console.log(err));


//임시로 설정한 자료
//디비가 연동되었으니 불필요
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
            await Car.updateOne({ _id: mongoose.Types.ObjectId(obj.id) }, { $set: obj })
            return "car 수정되었음";
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    delete: async (id) => {
        try {
            await Car.deleteOne({ _id: mongoose.Types.ObjectId(id) });
            return "car 삭제되었음"
        } catch (error) {
            console.log(error);
            throw error;
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