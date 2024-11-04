const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

// 1. 모든 할 일 목록 가져오기
async function fetchTodos() {
    try {
        const response = await fetch(BASE_URL);
        const todos = await response.json(); // 수동으로 JSON 파싱
        console.log('Todos:', todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

// 2. 새로운 할 일 추가하기
async function addTodo() {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ // 요청 본문을 JSON 형식으로 변환
                title: '새로운 할 일',
                completed: false
            })
        });
        const newTodo = await response.json(); // 응답을 JSON 파싱
        console.log('Todo added:', newTodo);
    } catch (error) {
        console.error('Error adding todo:', error);
    }
}

// 3. 특정 할 일 수정하기 (id 1인 할 일을 완료 처리)
async function updateTodo() {
    try {
        const response = await fetch(`${BASE_URL}/1`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: '할 일 수정됨',
                completed: true
            })
        });
        const updatedTodo = await response.json(); // 응답을 JSON 파싱
        console.log('Todo updated:', updatedTodo);
    } catch (error) {
        console.error('Error updating todo:', error);
    }
}

// 4. 특정 할 일 삭제하기 (id 1인 할 일 삭제)
async function deleteTodo() {
    try {
        const response = await fetch(`${BASE_URL}/1`, {
            method: 'DELETE'
        });
        // DELETE 요청에는 응답 본문이 없는 경우가 많으므로 단순히 상태 코드만 확인
        if (response.ok) {
            console.log('Todo deleted');
        } else {
            console.error('Failed to delete todo');
        }
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
}

// 함수들을 순서대로 실행해보자.
fetchTodos();
addTodo();
updateTodo();
deleteTodo();
