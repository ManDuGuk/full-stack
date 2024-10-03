import { useState, createContext, useEffect } from 'react';
import './App.css';
import Input from './Input';
import Output from './Output';
import CarDetailModal from './CarDetailModal';
import CarModifyModal from './CarModifyModal';
import axios from 'axios'


const MyContext = createContext();

const App = () => {
    console.log("app 들어감");

    const [carList, setCarList] = useState([]);
    const [getId, setId] = useState(5); //--> 필요없음 서버쪽에서 처리함
    //파라미터를 담을 스테이트가 필요함--> 수정 ,삭제에 쓸거임

    const [getName, setName] = useState("");
    const [getPrice, setPrice] = useState();
    const [getMaker, setMaker] = useState("");


    // 데이터 가져오는 함수
    async function getdata() {
        try {
            const { data } = await axios.get('http://localhost:3035/carList/');
            console.log(data); // 데이터를 로그로 출력
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

    //그냥 전부 때려박았는데 이건 올바른 사용법이 아닐꺼라 생각함
    return (
        <MyContext.Provider value={{ carList, setCarList, getId, setId, getName, setName, getPrice, setPrice, getMaker, setMaker }}>
            <Input />
            <Output />
            <CarDetailModal />
            <CarModifyModal />
        </MyContext.Provider>
    );
};

export { MyContext };
export default App;
