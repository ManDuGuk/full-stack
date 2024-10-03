import { useState } from "react";
import "./Input.css"

const Input = ({ appendCarData }) => {
    // 여기서도 한번더 스테이터스로 받네?? 넘겨질떄 마다 이난리 쳐야 하는건가?
    // 이거 하지 말라고 다른게 있었던거 같은데 useContext를 쓰면 된다고 한다.
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
                const newCarData = { name, price, company, year };
                appendCarData(newCarData);
            }} type="button" className="btn btn-primary btn-block">SAVE</button>
        </div>
    </div>);
}

export default Input;