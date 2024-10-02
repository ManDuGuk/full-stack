import { Outlet, Link } from "react-router-dom";

const Layout = (props) => {
    return (
        <>
            <h1>레이아웃 링크</h1>
            <p>레이아웃은 바뀌지 않고 아래쪽의 요소만 바뀐다.
            </p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">users</Link>
                    </li>
                    <li>
                        <Link to="/product">product</Link>
                    </li>
                    <li>
                        <Link to="/order">order</Link>
                    </li>
                    <li>
                        <Link to="/main">main</Link>
                    </li>
                    <li>
                        <Link to="*">NotFound</Link>
                    </li>
                </ul>
            </nav>
            <hr></hr>
            <Outlet />
        </>
    );
}

export default Layout;