import { useContext } from "react";
import { MyContext } from "./App";

const Test = () => {
    const { getCarList, getId } = useContext(MyContext); // useContext를 여기서 사용해야 합니다.

    console.log(getCarList, getId); // 가져온 데이터를 콘솔에 출력

    return (
        <>
            <h1>차 리스트</h1>
            <ul>
                {getCarList.map(car => (
                    <li key={car.id}>
                        {car.name} - {car.maker} - {car.price}원
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Test;
