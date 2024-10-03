import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "./App";
import axios from 'axios'
import "./Input.css"

const Input = () => {
    const { carList, setCarList, getId, setId, getName, setName, getPrice, setPrice, getMaker, setMaker } = useContext(MyContext);

    // 여기서도 한번더 스테이터스로 받네?? 넘겨질떄 마다 이난리 쳐야 하는건가?
    // 이거 하지 말라고 다른게 있었던거 같은데 useContext를 쓰면 된다고 한다.
    // const [name, setName] = useState("");
    // const [price, setPrice] = useState(0);
    // const [maker, setMaker] = useState("");


    return (<div className="container">
        <h3>중고차 등록</h3>
        <div className="input-group mb-0 input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text">Name</span>
            </div>
            <input type="text" className="form-control" value={getName} onChange={e => { setName(e.target.value) }} />
        </div>
        <div className="input-group mb-0 input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text">Price</span>
            </div>
            <input type="number" className="form-control" value={getPrice} onChange={e => { setPrice(e.target.value) }} />
        </div>
        <div className="input-group mb-0 input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text">Maker</span>
            </div>
            <input type="text" className="form-control" value={getMaker} onChange={e => { setMaker(e.target.value) }} />
        </div>

        <div className="input-group mb-0 input-group-lg">
            <button onClick={e => {
                console.log("버튼클릭됨");
                async function addData() {
                    try {
                        const newCarData = { name: getName, price: getPrice, maker: getMaker };
                        const response = await axios.post('http://localhost:3035/carList/', newCarData, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        console.log('POST 요청 성공:', response.data);

                        setCarList(response.data);
                        // const { data } = await axios.get('http://localhost:3035/carList/');
                        // setCarList(data);

                    } catch (error) {
                        console.error('오류 발생:', error);
                    }
                }
                addData();
            }} type="button" className="btn btn-primary btn-block">SAVE</button>
        </div>
    </div>);
}

export default Input;