import { useState, createContext } from 'react';
import './App.css';
import Input from './Input';
import Output from './Output';
import CarDetailModal from './CarDetailModal';
import CarModifyModal from './CarModifyModal';

const MyContext = createContext();

const App = () => {

    //목록을 관리할 스테이트
    const [carList, setCarList] = useState([]);

    //객체 스테이트 --> 데이터 조작용
    const [getCar, setCar] = useState({
        id: null,
        name: "",
        maker: "",
        price: null,
    })

    return (
        <MyContext.Provider value={{ carList, setCarList, getCar, setCar }}>
            <Input />
            <Output />
            <CarDetailModal />
            <CarModifyModal />
        </MyContext.Provider>
    );
};

export { MyContext };
export default App;
