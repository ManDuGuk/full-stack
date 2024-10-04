import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/store";
const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (<>
        <h1>카운터 페이지</h1>
        <h1>count: {count}</h1>
        <button onClick={(e) => { dispatch(increment()) }}>증가</button>
        <button onClick={(e) => { dispatch(decrement()) }}>감소</button>
    </>);
}

export default Counter;