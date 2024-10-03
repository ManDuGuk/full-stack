const CarDetailModal = () => {
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
                                    {/* <td>{modalData._id}</td> */}
                                </tr>
                                <tr>
                                    <th>NAME</th>
                                    {/* <td>{modalData.name}</td> */}
                                </tr>
                                <tr>
                                    <th>PRICE</th>
                                    {/* <td>{modalData.price}</td> */}
                                </tr>
                                <tr>
                                    <th>COMPANY</th>
                                    {/* <td>{modalData.company}</td> */}
                                </tr>
                                <tr>
                                    <th>YEAR</th>
                                    {/* <td>{modalData.year}</td> */}
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