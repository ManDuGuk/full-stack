import { useState } from "react";

//테이블
const Table = () => {

    let listArray = [
        { _id: "todo001", title: "밥먹고", done: false },
        { _id: "todo002", title: "커피먹고", done: false },
        { _id: "todo003", title: "간식먹고", done: false },
        { _id: "todo004", title: "내일먹고", done: false },
    ];

    const [todoList, setTodoList] = useState(listArray);
    const [todoId, setTodoId] = useState(5);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">_id</th>
                        <th scope="col">할일</th>
                        <th scope="col">완료</th>
                        <th scope="col">수정/삭제</th>
                    </tr>
                </thead>
                <tbody>
                    makeLi()
                </tbody>
            </table>
        </>
    )
}
export default Table;