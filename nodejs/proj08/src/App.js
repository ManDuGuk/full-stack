import './App.css';
import Input from './Input';
import Output from './Output';
import { useState } from "react";

const App = () => {

    const carList = [
        { _id: 1001, name: "GRANDEUR", price: 3500, company: "HYUNDAI", year: 2019, opacity: 1 },
        { _id: 1002, name: "SONATA2", price: 2500, company: "HYUNDAI", year: 2022, opacity: 1 },
        { _id: 1003, name: "BMW", price: 5500, company: "BMW", year: 2018, opacity: 1 },
        { _id: 1004, name: "S80", price: 4500, company: "VOLVO", year: 2023, opacity: 1 }
    ];

    //함수를 관리하는 스테이트를 만들어야..
    const [getCarList, setCarList] = useState(carList);

    //input값 변경해줄 스테이트
    //스테이트만 설정해주고 컴포넌트에 프롭스로 넘겨버릴꺼임
    const [getInputVal, setInputVal] = useState("");

    const [getCarId, setCarId] = useState(5);

    const [selectedCar, setSelectedCar] = useState("");

    const [getOpacity, setOpacity] = useState("");

    function renderArray(getCarList) {
        // 여기서 키값을 준다는 의미는 리스트의 컴포넌트를 반복시키면서 고유값을 주기위한 약속이고 , li에 준다는 개념이 아니다.
        // 여기함수는 li를 반복시키는게 아니라 컴포넌트를 반복시키면서 리스트를 생성하므로 key값을 줘야된다.
        return getCarList.map((cars) => {
            return (<Output key={cars._id} cars={cars} deleteCarArray={deleteCarArray} startEdit={startEdit} getInputVal={getInputVal} selectedCar={selectedCar} setSelectedCar={setSelectedCar} getOpacity={getOpacity} checkClick={checkClick} />)
        });
    }

    function setCarListPlus(getInputVal) {
        let newArray = [...getCarList];//바보짓을 
        let newdata = { _id: 1000 + getCarId, name: getInputVal, price: Math.floor(Math.random() * 1000), company: Math.floor(Math.random() * 1000).toString(36), year: Math.floor(Math.random() * 1000) }
        setCarId(getCarId + 1);
        newArray.push(newdata);
        setCarList(newArray);
    }

    function deleteCarArray(car) {
        let newArray = [...getCarList];

        console.log(car._id);

        let idx = newArray.findIndex((item) => {
            return item._id == car._id
        });
        console.log(idx);
        if (idx !== -1) {
            newArray.splice(idx, 1);
            setCarList(newArray);
        }
    }

    //체크박스 클릭시 투명도 줄이기
    function checkClick(car) {
        let newArray = getCarList.map(item => {
            if (item._id === car._id) {
                return { ...item, opacity: item.opacity === 1 ? 0.1 : 1 }; // 클릭 시 70%로 줄이기, 다시 클릭하면 100%
            }
            return item;
        });
        setCarList(newArray);
    }

    function startEdit(car, value) {
        setInputVal(car.name);
    }

    function editDon(getInputVal, selectedCar) {
        let newArray = [...getCarList];
        // 수정
        for (let i = 0; i < newArray.length; i++) {
            if (getCarList[i]._id == selectedCar._id) {
                console.log("찾음");
                console.log(i);

                newArray[i].name = getInputVal;
                setCarList(newArray);

                console.log(getCarList[i].title);
                renderArray(getCarList)
            }
        }
    }




    return (
        <>
            <div className="App">
                <div className="App-header">
                    <h1>자동차 신발보다 싸다!</h1>
                </div>
                <div>
                    <div className="container" style={{ marginTop: "5%" }}>
                        <Input getInputVal={getInputVal} setInputVal={setInputVal} setCarListPlus={setCarListPlus} editDon={editDon} selectedCar={selectedCar} />
                        {/* <Output getCarList={getCarList} setCarList={setCarList} /> */}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>CHECK?</th>
                                    <th>NO</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>COMPANY</th>
                                    <th>YEAR</th>
                                    <th>Del?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderArray(getCarList)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    )
};
export default App;