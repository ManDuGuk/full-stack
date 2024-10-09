import { useContext } from "react";
import { MyContext } from "./App";

const Go = () => {
    const { setCarList } = useContext(MyContext); // useContext를 여기서 사용해야 합니다.

    const updateCarName = () => {
        setCarList(prevCarList =>
            prevCarList.map(car =>
                car.id === 1 ? { ...car, name: "테스트" } : car // id가 일치하는 객체의 name 수정
            )
        );
    };

    return (
        <div>
            <button onClick={updateCarName}>차 이름 수정</button>
        </div>
    );
};

export default Go;
