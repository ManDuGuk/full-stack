//실질적으로 화면에 보이는 부분을 만듬
//link와 outlet모듈을 사용
import { Link, Outlet } from "react-router-dom";
//outlet모듈은

export function Layout() {
    return (
        <>
            <h1>레이아웃</h1>
            <p>레이아웃 화면은 변하지 않는다.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/pageOne">pageOne</Link>
                    </li>
                    <li>
                        <Link to="/pageTwo">pageTwo</Link>
                    </li>
                    <li>
                        <Link to="/counter">counter</Link>
                    </li>
                </ul>
            </nav >
            <hr></hr>
            <Outlet />
        </>
    )
}

