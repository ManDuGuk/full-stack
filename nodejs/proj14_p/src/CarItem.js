import CarModifyModal from "./CarModifyModal";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "./App";

const CarItem = ({ car }) => {

    console.log(car);

    const { setCarList, setCar } = useContext(MyContext);

    async function deleteDate() {
        try {
            console.log(`삭제 요청: http://localhost:3035/carList/${car._id}`); // 로그 추가
            const response = await axios.delete(`http://localhost:3035/carList/${car._id}`);
            console.log('delete 요청 성공:', response.data);
            setCarList(response.data);
        } catch (error) {
            console.error('오류 발생:', error);
        }
    }

    return (<tr>
        <td>{car.num}</td>
        <td><button data-toggle="modal" data-target="#detailModal"
            onClick={e => { setCar((pre) => { return { ...pre, ...car } }) }} type="button" className="btn" style={{ fontWeight: "bolder", color: "darkblue" }}>{car.name}</button ></td>
        <td>{car.maker}</td>
        <td>{car.price}</td>
        <td><button data-toggle="modal" data-target="#modifyModal"
            onClick={e => { setCar((pre) => { return { ...pre, ...car } }) }} type="button" className="btn btn-primary">수정</button></td>
        <td><button onClick={e => deleteDate()} type="button" className="btn btn-danger">삭제</button></td>
    </tr >)
}

export default CarItem;