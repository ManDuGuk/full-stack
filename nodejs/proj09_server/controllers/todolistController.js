//한 페이지에 여러 모듈 등록 가능
module.exports.getAllTodoList = (req, res) => {
    res.end('모든 todolist 조회기능');
}

module.exports.getTodolistById = (req, res) => {
    res.end('특정 todo 조회기능');
}

module.exports.createTodolist = (req, res) => {
    res.end('새 todo 생성 기능');
}

module.exports.modifyTodolistById = (req, res) => {
    res.end('todolist 수정 기능');
}

module.exports.deleteTodolistById = (req, res) => {
    res.end('todolist 삭제 기능');
}