// 넘어온 props를 구조분해 할당으로 한번에 받음
function Input({ handler, greeting }) {

    return (
        <>
            <button onClick={function (e) {
                handler();
            }}>
                확인
            </button>
            <p>{greeting}</p>
        </>
    )
}

export default Input;