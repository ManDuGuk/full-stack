import { useState } from "react";

const Input = () => {

    //훅?
    const [newTodo, setNewTodo] = useState("");
    return (
        <>

            <label for="exampleInputEmail1">새로운 할일 등록</label>
            <input type="text" class="form-control" placeholder="등록 하시라" onChange={(e) => {
                setNewTodo(e.target.value)
                console.log(newTodo);
            }} />
            {newTodo}
            <button type="submit" class="btn btn-primary">Submit</button>

        </>
    )
}
export default Input;