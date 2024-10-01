//여러 요청 메서드들을 모아놓은곳 상태코드와 처리결과를 제이슨으로 전달해준다.

//메서드들이 작동할때 다루어질 데이터들은 객체로 관리함 객체를 조작하는 메서들 또한 정의하고있다.
const todoDao = require('../models/todoModel');

module.exports.getAllTodo = (req, res) => {
    try {
        const todolist = todoDao.findAll();
        res
            .status(200)
            .json(todolist);
    } catch (error) {
        res.status(500).json({ "message": "getAlltodo오류" });
    }
}

module.exports.getTodoById = (req, res) => {
    //요청 url에 넘어가는 params데이터에서 뽑아낸다.
    const id = req.params.id
    console.log(id);

    try {
        const todo = todoDao.findById(id)
        res.status(200).json(todo)

    } catch (error) {
        res.status(500).json({ "message": "getTodoById오류" });
    }
}

//post로 보내는건 req 바디에 넣어서 보내짐
//body에 보내지는 내용은 바디파서를 이용하면 쉽게 사용가능함
//미들웨어에서 app.use(express.json())을 했기때문에 바디파서 문법 사용가능함
module.exports.createTodo = (req, res) => {
    //생성될 객체를 미리 구성하고 넘기는게 후처리 작업이 편함
    //일단은 하나만 넘긴다고 처리하자
    //id는 생성될때 따로 dao부분에서 처리하니까 넣지 않는다.
    const newTodo = {
        title: req.body.title,
    }
    try {
        todoDao.create(newTodo);
        const todolist = todoDao.findAll();
        res.status(200).json(todolist);
    } catch (error) {
        res.status(500).json({ "message": "createTodo오류" });
    }
}

module.exports.modifyTodoById = (req, res) => {
    //마찬가지로 수정될 객체를 미리 구성하고 넘긴다.
    //dao에서 id로 조회해야되니까 id도 같이 넘긴다.

    // URL 파라미터에서 ID를 가져오고 요청 본문에서 수정할 내용을 가져옴
    const id = req.params.id;
    const updateTodo = {
        id: id,
        title: req.body.title,
    };

    try {
        todoDao.update(updateTodo);
        const todolist = todoDao.findAll();
        res.status(200).json(todolist);
    } catch (error) {
        res.status(500).json({ "message": "modifyTodoById 오류" })
    }
}

module.exports.deleteTodoById = (req, res) => {

    const id = req.params.id;

    try {
        todoDao.delete(id);
        const todolist = todoDao.findAll();
        res.status(200).json(todolist);
    } catch (error) {
        res.status(500).json({ "message": "deleteTodoById 오류" })
    }
}
