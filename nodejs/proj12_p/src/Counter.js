import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/store";

export function Counter() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();

    return (
        <>
            <h1>counter페이지</h1>
            <h3>Count: {count}</h3>
            <button onClick={(e) => { dispatch(increment()) }}>증가</button>
            <button onClick={(e) => { dispatch(decrement()) }}>감소</button>
        </>
    )
}