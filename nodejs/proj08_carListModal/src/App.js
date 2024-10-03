import { useState } from 'react';
import './App.css';
import Input from './Input';
import Output from './Output';
import CarDetailModal from './CarDetailModal';
import CarModifyModal from './CarModifyModal';

const App = () => {
    //임시데이터
    const carArr = [
        { _id: 1, name: "SONATA", price: 2500, company: "HYUNDAI", year: 2021 },
        { _id: 2, name: "GRANDEUR", price: 3500, company: "HYUNDAI", year: 2023 },
        { _id: 3, name: "K9", price: 2500, company: "KIA", year: 2019 },
        { _id: 4, name: "BMW", price: 4500, company: "BMW", year: 2018 }
    ];
    //스테이터스들
    const [carList, setCarList] = useState(carArr);
    const [seqId, setSeqId] = useState(5);

    // 이건왜 이렇게 초기화를???
    // 그냥 카리스트 스테이트를 넘기면 안되나?
    const [modalData, setModalData] = useState({ _id: -1, name: "#", price: -1, company: "#", year: -1 });

    // 새롭게 리스트 추가될때 쓰이는 함수네
    const appendCarData = (newCarData) => {
        newCarData._id = seqId;
        setSeqId(seqId + 1);
        console.log(">>> appendCarData:", newCarData);
        setCarList([...carList, newCarData]);
    }


    // 부트스트랩 모달창에 상세정보 표시 하기
    const showDetail = (car) => {
        // alert(`${_id},${name}, ${price}, ${company}, ${company}`);
        setModalData(car);
    }

    // 모달창안에서 수정할때 
    const modifyCarData = (car) => {
        setModalData(car);
    }

    // 자동차 데이터 삭제
    const removeCarData = (car) => {
        const idx = carList.findIndex((item) => {
            return car._id === item._id;
        });
        if (idx != -1) {
            const newList = [...carList];
            newList.splice(idx, 1);
            setCarList(newList);
        }
    }

    // 자동차 데이터 수정
    const modifyOk = (modifyCarData) => {
        console.log(">>> modifyOk:", modifyCarData);
        const idx = carList.findIndex((car) => {
            return car._id == modifyCarData._id;
        });
        if (idx != -1) {
            const newList = [...carList];
            newList[idx] = modifyCarData
            setCarList(newList);
        }
    }

    // 렌더링
    return (<div className="App">
        <div className="App-header">
            <h1>가을을 남기고 간 사랑</h1>
        </div>
        <Input appendCarData={appendCarData} />
        <hr />
        {/* props로 넘겨주기 */}
        <Output
            carList={carList}
            showDetail={showDetail}
            modifyCarData={modifyCarData}
            removeCarData={removeCarData} />
        {/* 상세페이지 hidden 처리됨 */}
        <CarDetailModal modalData={modalData} />
        {/* 수정페이지 hidden 처리됨 */}
        <CarModifyModal modalData={modalData} modifyOk={modifyOk} />
    </div>)
};

export default App;