import { useContext } from "react";
import { MyContext } from "./App";
import axios from 'axios'
import "./Input.css"

const Input = () => {
    const { setCarList, getCar, setCar } = useContext(MyContext);

    async function addData() {
        try {
            const response = await axios.post('http://localhost:3035/carList/', getCar, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('POST 요청 성공:', response.data);
            setCarList(response.data);
        } catch (error) {
            console.error('오류 발생:', error);
        }
    }

    return (<div className="container">
        <h3>중고차 등록</h3>
        <div className="input-group mb-0 input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text">Name</span>
            </div>
            <input type="text" className="form-control" value={getCar.name}
                onChange={e => { setCar((pre) => { return { ...pre, name: e.target.value } }) }} />
        </div>
        <div className="input-group mb-0 input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text">Maker</span>
            </div>
            <input type="text" className="form-control" value={getCar.maker}
                onChange={e => { setCar((pre) => { return { ...pre, maker: e.target.value } }) }} />
        </div>
        <div className="input-group mb-0 input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text">Price</span>
            </div>
            <input type="number" className="form-control" value={getCar.price}
                onChange={e => { setCar((pre) => { return { ...pre, price: e.target.value } }) }} />
        </div>

        <div className="input-group mb-0 input-group-lg">
            <button onClick={e => {
                addData();
            }} type="button" className="btn btn-primary btn-block">SAVE</button>
        </div>
    </div>);
}

export default Input;