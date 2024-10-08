import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";
import { None } from "./None";
import { Counter } from "./Counter";
// 라우터는 렌더링 되지는 않고 사용자의 요청에 따라 어떻게 처리될지 정하는 푯말과 같음
export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<PageOne />}></Route>
                    <Route path="pageOne" element={<PageOne />}></Route>
                    <Route path="pageTwo" element={<PageTwo />}></Route>
                    <Route path="counter" element={<Counter />}></Route>
                    <Route path="*" element={<None />}></Route>
                </Route>
            </Routes>
        </BrowserRouter >
    )
}