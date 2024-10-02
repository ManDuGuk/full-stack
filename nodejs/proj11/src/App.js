import { useState } from 'react';
import './App.css';
import Input from './Input';
import Output from './Output';
import CarDetailModal from './CarDetailModal';
import CarModifyModal from './CarModifyModal';

const App = () => {
    // 차량의 기본정보 목록 --> 이걸 노드에서 요청한 자료로 바꿔주어야한다.
    const carArr = [
        { _id: 1, name: "SONATA", price: 2500, company: "HYUNDAI", year: 2021 },
        { _id: 2, name: "GRANDEUR", price: 3500, company: "HYUNDAI", year: 2023 },
        { _id: 3, name: "K9", price: 2500, company: "KIA", year: 2019 },
        { _id: 4, name: "BMW", price: 4500, company: "BMW", year: 2018 }
    ];

    //스테이스터스들
    //차량 목록 
    const [carList, setCarList] = useState(carArr);
    //차량 고유ID
    const [seqId, setSeqId] = useState(5);
    //모달 데이터?
    const [modalData, setModalData] = useState({ _id: -1, name: "#!*", price: -1, company: "#!*", year: -1 });

    // 새로운 차량을 추가하는 함수인듯
    const appendCarData = (newCarData) => {
        newCarData._id = seqId;
        setSeqId(seqId + 1);
        console.log(">>> appendCarData:", newCarData);
        setCarList([...carList, newCarData]);
    }

    // 모달창에 상세정보 표시
    const showDetail = (car) => {
        // alert(`${_id},${name}, ${price}, ${company}, ${company}`);
        // 부트스트랩 모달창에 상세정보 표시 하기
        setModalData(car);
    }

    // 모달창에서 상세정보 수정
    const modifyCarData = (car) => {
        setModalData(car);
    }

    // 자동차 지우기
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

    // 수정하기
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

    return (<div className="App">
        <div className="App-header">
            <h1>가을을 남기고 간 사랑</h1>
        </div>
        <Input appendCarData={appendCarData} />
        <hr />
        <Output
            carList={carList}
            showDetail={showDetail}
            modifyCarData={modifyCarData}
            removeCarData={removeCarData} />
        <CarDetailModal modalData={modalData} />
        <CarModifyModal modalData={modalData} modifyOk={modifyOk} />
    </div>)
};

export default App;