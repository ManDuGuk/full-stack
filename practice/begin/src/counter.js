import { useState } from "react";

const Counter = () => {

    const [count, setCont] = useState(0);

    return (
        <>
            <div>
                <p>counter: {count}</p>
                <button onClick={() => { setCont(count + 1) }}>증가</button>
            </div>

        </>
    )
}

export default Counter;