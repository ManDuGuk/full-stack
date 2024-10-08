import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Product from "./components/Products";
import Users from "./components/Users";
import Orders from "./components/Orders";
import NotFound from "./components/NotFound";
import Main from "./components/Main";


const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="product" element={<Product />} />
                        <Route path="main" element={<Main />} />
                        <Route path="users" element={<Users />} />
                        <Route path="order" element={<Orders />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;