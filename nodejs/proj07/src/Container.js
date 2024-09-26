import { useState } from "react";
import LisComponent from "./LiComponent";

const Container = () => {

    //스테이트로 변환
    //하나는 변수 , 하나는 세터
    //스테이트를 변경하면 다시 렌더링 된다.
    //이벤트 핸들러는 그냥 인라인으로 박아버린다. (dom셀렉트 잘 안하고 씀)
    //이런점 때문에 view가 좀더 개선된 버전이다.
    //스테이트를 바꿀려면 이벤트 핸들러를 사용한다.

    const [newTodo, setNewTodo] = useState("새할일");

    //jsx에 들어갈때 알아서 들어감 --> 그런데 이대로 밖아버리면 변수를 밖아버리는것과 같아서 스테이로만들어줘서 변경해줘야함
    // let listArray = [
    //     <li>학교가기</li>,
    //     <li>집가기</li>,
    //     <li>돌아가기</li>,
    // ];

    let listArray = [
        { _id: "todo001", title: "밥먹고", done: false },
        { _id: "todo002", title: "차먹고", done: false },
        { _id: "todo003", title: "커피먹고", done: false },
        { _id: "todo004", title: "간식먹고", done: false },
    ];


    const [todolist, setTodoList] = useState(listArray);
    const [todoId, setTodoId] = useState(5);

    //이런식으로 따로 함수로 빼서 사용도 가능하고 인라인데 직접 콜백함수로 박아버릴수도 있다.
    const inputHandler = (e) => {
        // console.log("키 누름", e.target.value);
        // state를 변경하면 변경된 내용이 input에 반영된다.
        // state는 setter를 이용해서 변경
        setNewTodo(e.target.value);
        console.log(newTodo);

    }

    const buttonHandler = (e) => {
        //버튼 핸들러 에서 state사용
        console.log(newTodo);

        // 이건 무제가 있었다.
        // //todolist 내용복제
        // let newTodoList = [...todolist];
        // //복제된 todoList에 새 요소 추가
        // newTodoList.push(<li>{newTodo}</li>);
        // //복제된 todoList를 setTodoList 한다. (리렌링됨);
        // setNewTodo(newTodoList);

        //todolist 내용복제 (풀어서)
        // let newTodoList = [...todolist];
        // //복제된 todoList에 새 요소 추가
        // newTodoList.push(<li>{newTodo}</li>);
        // //복제된 todoList를 setTodoList 한다. (리렌링됨);
        // setTodoList(newTodoList);

        //todolist 내용복제 (줄여서)
        // let newTodoList = [...todolist, <li>{newTodo}</li>];
        // setTodoList(newTodoList)

        //todolist 내용복제 (더 줄여서)
        // setTodoList([...todolist, <li>{newTodo}</li>]);

        // return todoList.map((todo, i) => {
        //     return <li key={i}>{todoList[i].title}</li>
        // });


        // return todoList.map((todo, i) => {
        //     return <li key={i}>{todo.title}</li>
        // });


        // setTodoList([...todolist, { _id: "todo00" + todoId, title: "간식먹고", done: false }]);
        setTodoList([...todolist, { _id: "todo00" + todoId, title: newTodo, done: false }]);
        setTodoId(todoId + 1);
        //배열에 추가후 state초기화
        setNewTodo("");
    }

    console.log(todolist);



    // splice 사용해봄
    function makeLi() {
        // let todoListLi = [];
        // 처리
        // for(var i=0; i<todoList.length; i++) {
        //     todoListLi.push(<li key={i}>{todoList[i].title}</li>);
        // }

        // todoList.forEach((todo, i)=>{
        //     todoListLi.push(<li key={i}>{todoList[i].title}</li>);
        // });
        // return todoListLi;

        return todolist.map((todo, i) => {
            // 리스트에는 반드시 키를 넣어줘야한다.
            return <li key={i}>{todo.title}<button onClick={(e) => {
                // console.log("삭제버튼 클릭함");

                // splice로 삭제 구현해보기
                const newTodoList = [...todolist];
                const idx = newTodoList.findIndex((item) => {
                    return item._id === item._id;
                });
                if (idx !== -1) {
                    newTodoList.splice(idx, 1);
                    setTodoList(newTodoList);
                }
            }}>delete</button></li>
        });
    }

    // 필터사용해봄
    function makeLi2() {


        return todolist.map((todo, i) => {
            // 리스트에는 반드시 키를 넣어줘야한다.
            return <li key={i}>{todo.title}<button onClick={(e) => {
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
        });
    }

    function toggleTodo(_id) {
        // console.log(_id);
        // 구조분해 할당으로 받을수도 있음 
        const idx = todolist.findIndex((todo) => {
            return todo._id === _id
        })
        // 구조분해 할당 다시 할것
        // const idx = todolist.findIndex(({ todo }) => {
        //     return todo._id === _id
        // })
        if (idx !== -1) {
            //요소의 내용만 변경해서는 state가 변경되지 않는다. 
            //state의 참조가 바뀌어야한다.
            const newList = [...todolist];
            newList[idx].done = !todolist[idx].done;
            setTodoList(newList);
        }
    }

    function makeLi3() {
        // 여기서 키값을 준다는 의미는 리스트의 컴포넌트를 반복시키면서 고유값을 주기위한 약속이고 , li에 준다는 개념이 아니다.
        // 여기함수는 li를 반복시키는게 아니라 컴포넌트를 반복시키면서 리스트를 생성하므로 key값을 줘야된다.
        return todolist.map((todo, i) => {
            return (<LisComponent key={todo._id} todo={todo} todolist={todolist} setTodoList={setTodoList} toggleTodo={toggleTodo} />)
        });
    }



    //스플라이스로 해보기(원본배열수정함)
    function deleteArray(index) {
        let nowList = [...todolist];
        nowList.splice(index, 1);
        setTodoList(nowList);
    }



    return (
        <>
            <div className="container" style={{ marginTop: "30px" }}>
                <h3>할일 입력</h3>
                <p>

                    {/* <input type="text" value={newTodo} onChange={inputHandler} /> */}
                    {/* //todolist 내용복제 (인라인으로 한번에 _이걸 추천한다고함) */}
                    <input type="text" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
                    <button onClick={buttonHandler}>save</button>
                    {newTodo}
                </p>
                <hr />
                <h3>할일 목록</h3>
                <ul>
                    {/* {todolist} */}
                    {/* todoList만큼 반복 */}
                    {

                        // 한줄로 만들기
                        // 이렇게 하면 안됨 --> i값을 넘기면 인덱스를 넘기게 되는거고, 그걸 키값으로 설정했다면 그게 순번에 맞는 고유값이라는 보장이 없기 때문에 그러면 안된다. 
                        // 만약에 key값을 key={todo.id} 이렇게 줬담면 키값을 넘겨서 쓰는것도 문제가 없지만 그냥 인덱스 값을 넘겼지 때문에 잘못 작동할 우려가 있다.  
                        // todolist.map((todo, i) => <li key={i}>{todolist[i].title}<button onClick={(e) => deleteArray(e.target.key)}>삭제</button></li>)

                        // 함수로 만들기(slice)
                        // makeLi()
                        // 함수로 만들기(filter)
                        // makeLi2()
                        // 컴포넌트로 분리하고 조립하기
                        makeLi3()
                    }
                </ul>
            </div>
        </>
    )
}
export default Container;