
import { useContext } from "react";
import { MyContext } from "./App";
import axios from "axios";


const CarModifyModal = ({ modalData, modifyOk }) => {

    const { getCar, setCarList, setCar } = useContext(MyContext);

    // 노드 서버와 통신 get요청
    async function modifyCarById() {
        try {
            const { data } = await axios.post(`http://localhost:3035/carList/${getCar._id}`, getCar);
            console.log("수정하기 완료");
            setCarList(data);
        } catch (error) {
            console.error('오류 발생:', error);
        }
    }

    return (<>
        {/* <!-- The Modal --> */}
        <div className="modal fade" id="modifyModal">
            <div className="modal-dialog">
                <div className="modal-content">

                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                        <h4 className="modal-title">중고 자동차 정보 수정</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className="modal-body">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{getCar.num}</td>
                                </tr>
                                <tr>
                                    <th>NAME</th>
                                    <td><input type="text" value={getCar.name}
                                        onChange={e => { setCar((pre) => { return { ...pre, name: e.target.value } }) }} /></td>
                                </tr>
                                <tr>
                                    <th>Maker</th>
                                    <td><input type="text" value={getCar.maker}
                                        onChange={e => { setCar((pre) => { return { ...pre, maker: e.target.value } }) }} /></td>
                                </tr>
                                <tr>
                                    <th>PRICE</th>
                                    <td><input type="text" value={getCar.price}
                                        onChange={e => { setCar((pre) => { return { ...pre, price: e.target.value } }) }} /></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button onClick={(e) => { modifyCarById() }} type="button" className="btn btn-primary" data-dismiss="modal">수정완료</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default CarModifyModal;