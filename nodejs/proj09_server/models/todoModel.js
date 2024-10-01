//임시로 설정한 자료
let todoList = [
    { id: 1, title: "밥먹기" },
    { id: 2, title: "간식먹기" },
]

let autoId = 3;

// //create테스트
// const temp = { title: "과일먹기" }

// //update
// const temp2 = { id: 1, title: "수정때리멕이기" }

// //delete
// const temp3 = { id: 2, title: "수정때리멕이기" }


// 여기서 넘어온 객체가지고 각종 연산처리
const todoDao = {
    findAll: () => {
        return [...todoList];
    },
    findById: (id) => {
        return todoList.filter((todo) => {
            return Number(todo.id) === Number(id)
        })
    },
    create: (obj) => {
        const newObj = { ...obj, id: autoId }; // 새 객체 생성
        todoList.push(newObj);
        ++autoId;
        return "todo 생성되었음";
    },
    update: (obj) => {
        //map은 각 요소를 순회하며 새로운 배열을 반환한다. 조건에 따라 업데이트할 객체를 반환하고,
        //그렇지 않다면 원본객체를 그래로 반환한다
        //구조분해할당을 아래와 같이 쓰면 item의 속성을 유지하면서 덮어쓸수 있다고한다.
        todoList = todoList.map((item) => {
            return Number(item.id) === Number(obj.id) ? { ...item, ...obj } : item
        })
        return "todo 수정되었음"
    },
    delete: (id) => {
        //특정 요소를 삭제하는 거니까 map이 아닌 filter가 좋다.
        todoList = todoList.filter((item) => {
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



module.exports = todoDao;