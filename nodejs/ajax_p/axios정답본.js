import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

// 1. 모든 할 일 목록 가져오기
async function fetchTodos() {
    try {
        const response = await axios.get(BASE_URL);
        console.log('Todos:', response.data);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

// 2. 새로운 할 일 추가하기
async function addTodo() {
    try {
        const response = await axios.post(BASE_URL, {
            title: '새로운 할 일',
            completed: false
        });
        console.log('Todo added:', response.data);
    } catch (error) {
        console.error('Error adding todo:', error);
    }
}

// 3. 특정 할 일 수정하기 (id 1인 할 일을 완료 처리)
async function updateTodo() {
    try {
        const response = await axios.put(`${BASE_URL}/1`, {
            title: '할 일 수정됨',
            completed: true
        });
        console.log('Todo updated:', response.data);
    } catch (error) {
        console.error('Error updating todo:', error);
    }
}

// 4. 특정 할 일 삭제하기 (id 1인 할 일 삭제)
async function deleteTodo() {
    try {
        await axios.delete(`${BASE_URL}/1`);
        console.log('Todo deleted');
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
}

// 함수들을 순서대로 실행해보자.
fetchTodos();
addTodo();
updateTodo();
deleteTodo();
