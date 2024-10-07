import { useContext } from "react";
import { MyContext } from "./App";

const CarDetailModal = () => {

    const { getCar } = useContext(MyContext);

    // 굳이 할필요없음, 물론 추가적인 데이터를 받아와야하면 필요하겠지만?

    // // 노드 서버와 통신 get요청
    // async function getdataById() {
    //     try {
    //         const { data } = await axios.get(`http://localhost:3035/carList/${car.id}`);
    //         console.log("id로 불러오기 통신됨");

    //         setCar({ ...getCar, ...data })
    //     } catch (error) {
    //         console.error('오류 발생:', error);
    //     }
    // }
    // getdataById();


    return (<>
        {/* <!-- 모달 검정박스 --> */}
        <div className="modal fade" id="detailModal">
            {/* 모달 흰박스*/}
            <div className="modal-dialog">
                {/* 모달 내용 */}
                <div className="modal-content">

                    {/* <!-- 모달 제목 --> */}
                    <div className="modal-header">
                        <h4 className="modal-title">중고 자동차 상세 정보</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>

                    {/* <!-- 모달 내용 --> */}
                    <div className="modal-body">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{getCar.num}</td>
                                </tr>
                                <tr>
                                    <th>NAME</th>
                                    <td> {getCar.name}</td>

                                </tr>
                                <tr>
                                    <th>MAKER</th>
                                    <td>{getCar.maker}</td>

                                </tr>
                                <tr>
                                    <th>PRICE</th>
                                    <td>{getCar.price}</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                    {/* <!-- 모달 버튼 --> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default CarDetailModal;