//임시로 설정한 자료
let carList = [
    { id: 1, name: "차1", maker: "현대1", price: 1000 },
    { id: 2, name: "차2", maker: "현대2", price: 2000 },
    { id: 3, name: "차3", maker: "현대3", price: 3000 },
    { id: 4, name: "차4", maker: "현대4", price: 4000 },
];

let autoId = 5;

// //create테스트
// const temp = { title: "과일먹기" }

// //update
// const temp2 = { id: 1, title: "수정때리멕이기" }

// //delete
// const temp3 = { id: 2, title: "수정때리멕이기" }


// 여기서 넘어온 객체가지고 각종 연산처리
const carModel = {
    findAll: () => {
        return [...carList];
    },
    findById: (id) => {
        return carList.filter((car) => {
            return Number(car.id) === Number(id)
        })
    },
    create: (obj) => {
        const newObj = { ...obj, id: autoId }; // 새 객체 생성
        carList.push(newObj);
        ++autoId;
        return "todo 생성되었음";
    },
    update: (obj) => {
        //map은 각 요소를 순회하며 새로운 배열을 반환한다. 조건에 따라 업데이트할 객체를 반환하고,
        //그렇지 않다면 원본객체를 그래로 반환한다
        //구조분해할당을 아래와 같이 쓰면 item의 속성을 유지하면서 덮어쓸수 있다고한다.
        carList = carList.map((item) => {
            return Number(item.id) === Number(obj.id) ? { ...item, ...obj } : item
        })
        return "todo 수정되었음"
    },
    delete: (id) => {
        //특정 요소를 삭제하는 거니까 map이 아닌 filter가 좋다.
        carList = carList.filter((item) => {
            return Number(item.id) !== Number(id);
        });
        return "todo 삭제되었음"
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