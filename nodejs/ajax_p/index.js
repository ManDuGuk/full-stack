import axios from axios;

//axios 자바스크립트 라이브러리
//브라우저와 nodejs 둘다 사용가능하다.
//프로미스 기반이며 기본적으로 json데이터를 처리한다.

//프로미스 기반이라는건 then으로 받거나 await로 받아야 한다는 것이다.

//또한 요청을 보냈을때 제대로 받아오는지 try catch문으로 처리해줘야한다.
//그것고 그냥 감싸면 안되고, 정확히 어디서 잘못되었는지 잘 감싸야 한다.

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

// 반환처리 변수
let result;

//모든 할일 목록 가져오기
const fetchTodos = async () => {

    try {
        const response = await axios.get(BASE_URL);

        //응답여부에 따른 검증은 대부분 status로 처리함
        //statusText로 처리하면 대소문자 구별이 필요하기 때문에 status로 처리함
        if (response.status !== 200) {
            return result = "get 요청이 잘못됨"
        }
        const data = response.data;
        return data;
    } catch (error) {
        return result = error;
    }

}
//새로운 할일 추가하기
const addTodo = async () => {
    try {
        const response = await axios.post(BASE_URL,
            {
                title: "새로운 할일",
                "completed": false
            }
        )
        if (response.status !== 200) {
            return result = "post 요청 잘못됨"
        }
        return result = "새로운 할일 추가 완료"
    } catch (error) {
        return result = error;

    }
}
//특정 할일 수정하기
const updateTodo = async () => {
    try {
        const response = await axios.put(BASE_URL,
            {
                
            }
        )
    }
    catch (err) {
        return result = err;
    }
}
//특정 할일 삭제하기


//함수들 순서대로 실행하기
// fetchTodos();
// addTodo();
// updateTodo();
// deleteTodo();



