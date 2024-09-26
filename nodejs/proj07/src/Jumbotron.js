const Jumbotron = () => {
    return (
        <>
            {/* jsx는 class 속성명을 className으로 줘야됨 */}
            {/* jsx는 style 속성을 객체로 넣어줘야됨 */}
            {/*  style={{ marginBottom: 0 }} 의미는 jsx의 코드가 들어갈 부분{} 안에 style속성 객체를 넣어준거임 */}
            <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
                <h1>My First Bootstrap 4 Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
        </>
    );
}
export default Jumbotron;