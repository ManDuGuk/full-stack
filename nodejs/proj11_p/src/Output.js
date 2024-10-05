import CarItem from "./CarItem";
import { useContext, useEffect } from "react";
import { MyContext } from "./App";
import axios from 'axios'

const Output = () => {
    const { carList, setCarList } = useContext(MyContext);

    // 노드 서버와 통신 get요청
    async function getdata() {
        try {
            const { data } = await axios.get('http://localhost:3035/carList/');
            // console.log(data); // 데이터를 로그로 출력
            setCarList(data); // 가져온 데이터를 상태로 설정
        } catch (error) {
            console.error('오류 발생:', error);
        }
    }

    // 컴포넌트가 마운트될 때 데이터 가져오기
    // 이거 안해주면 무한루프돔
    useEffect(() => {
        getdata(); // 데이터 가져오기 호출
    }, []);

    // 여기서는 배열을 돌리면서 작업, 주의점은 key값을 넘겨줄것
    const makeRow = () => {
        return (
            carList.map((car) => {
                return <CarItem
                    key={car.id}
                    car={car} />
            })
        );
    }

    return (<div className="container">
        <h2>거래 가능 중고 자동차 목록</h2>
        <p>관심 있는 상품을 선택 하세요. (하면 된다)</p>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>NO</th>
                    <th>NAME</th>
                    <th>MAKER</th>
                    <th>PRICE</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {makeRow()}
            </tbody>
        </table>
    </div>);
}

export default Output;