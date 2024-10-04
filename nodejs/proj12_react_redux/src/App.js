import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./inc/Layout";
import Home from "./components/Home";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="counter" element={<Counter />} />
                        <Route path="todo" element={<TodoList />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App;