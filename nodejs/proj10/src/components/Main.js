import { Link } from 'react-router-dom';
const Main = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/product">상품</Link></li>
                    <li><Link to="/users">사용자</Link></li>
                    <li><Link to="/orders">주민</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Main;