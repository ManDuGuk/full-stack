import { useState } from "react";
import Input from "./Input";
import Output from "./Output";

function App() {

    //message 변수의 이름, setMessage 변수에 접근할 세터이름
    //useState() 훅 --> 주머니라고 생각함??
    const [message, setMessage] = useState("hello world");

    //내가 정의한 함수
    function eventHandler() {
        setMessage("안녕세게")// 세터로 변수값 변경
        console.log("버튼 클릭");
    }

    return (
        <>
            <h1>리엑트 안녕!</h1>
            {/* props(매개변수와 비슷)에 담겨서 넘어감 handler랑 ,greeting 이름으로 */}
            <Input handler={eventHandler} greeting={message} />
            {/* props(매개변수와 비슷)에 담겨서 넘어감 hihi이름으로 */}
            <Output hihi={message} />
        </>
    )
}

export default App;