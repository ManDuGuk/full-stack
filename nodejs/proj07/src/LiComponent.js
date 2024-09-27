const LisComponent = ({ todo, todolist, setTodoList, toggleTodo, editTitle }) => {

    // 리스트에는 반드시 키를 넣어줘야한다. // 모듈로 만들어 분리되었으므로 해당 코드에서는 필요없다.
    return <li>
        <input type="checkbox" onChange={(e) => {
            toggleTodo(todo._id)
        }} checked={todo.done && "checked"} />
        <span onClick={(e) => { editTitle(todo); }} style={{ textDecoration: todo.done && "line-through" }}>
            {todo.title}
        </span>
        <button onClick={(e) => {
            // console.log("삭제버튼 클릭함");

            // 조건에 맞는것만 필터링 해서 array 생성
            const newTodoList = [...todolist];
            const idx = newTodoList.filter((item) => {
                return item._id !== todo._id;
            });
            if (idx !== -1) {
                newTodoList.splice(idx, 1);
                setTodoList(newTodoList);
            }
        }}>delete</button></li>

}
export default LisComponent; 