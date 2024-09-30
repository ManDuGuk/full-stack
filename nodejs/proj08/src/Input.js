import { useState } from "react";
import "./Input.css"

const Input = ({ appendCarData }) => {

    // input쪽에서 들어가는 항목들도 변하는 값이니까 스테이트 필요
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [company, setCompany] = useState("");
    const [year, setYear] = useState(0);

    return (<div className="container">
        <h3>중고차 등록</h3>
        <div className="input-group mb-0 input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text">Name</span>
            </div>
            <input type="text" className="form-control" value={name} onChange={e => { setName(e.target.value) }} />
        </div>
        <div className="input-group mb-0 input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text">Price</span>
            </div>
            <input type="number" className="form-control" value={price} onChange={e => { setPrice(e.target.value) }} />
        </div>
        <div className="input-group mb-0 input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text">Company</span>
            </div>
            <input type="text" className="form-control" value={company} onChange={e => { setCompany(e.target.value) }} />
        </div>
        <div className="input-group mb-0 input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text">Year</span>
            </div>
            <input type="text" className="form-control" value={year} onChange={e => { setYear(e.target.value) }} />
        </div>
        <div className="input-group mb-0 input-group-lg">
            <button onClick={e => {
                //데이터 객체로 생성해서 
                const newCarData = { name, price, company, year };
                //리스트 추가함수에 넘겨주면 추가됨
                appendCarData(newCarData);
            }} type="button" className="btn btn-primary btn-block">SAVE</button>
        </div>
    </div>);
}

export default Input;