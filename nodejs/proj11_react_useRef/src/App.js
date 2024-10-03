
import { useState, useEffect } from "react";

import { useRef } from "react";

const App = () => {

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    // 처음에 렌더링되자마자 바로 1회 포커스 상태로 만들기
    useEffect(() => { focusInput() }, []);


    const [inputVal, setInputVal] = useState("");
    const [inputEnter, setInputEnter] = useState(["hi", "by"]);
    return (
        <>
            <div className="App">
                <h1>hello world</h1>
                <input type="text" value={inputVal}
                    ref={inputElement}
                    onChange={(e) => { setInputVal(e.target.value) }}
                    onKeyUp={(e) => {

                        if (e.key === "Enter") {
                            console.log(e.target.value);
                            setInputEnter([...inputEnter, e.target.value]);
                            console.log(inputEnter);
                            setInputVal("");
                        }

                        // 포커스를 다시주기
                        focusInput();
                    }}
                ></input>
            </div>
            <ul>
                <li>hi</li>
                <li>onchange: {inputVal}</li>
                {inputEnter.map((item, i) => { return <li key={i}>{item}</li> })}
            </ul>

        </>
    )
}

export default App;