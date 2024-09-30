const CarItem = ({ car, showDetail, modifyCarData, removeCarData }) => {

    // 또객체를 만들어주네? 그냥 car._id 이거하기 싫어서 일런거겠지?
    const { _id, name, price, company, year } = car;

    return (<tr>
        <td>{_id}</td>
        {/* data-toggle 부트스트랩 문법이란는데, data-target도 마찬가지 인듯 */}
        <td><button data-toggle="modal" data-target="#detailModal" onClick={e => {
            // 모달 상세페이지임
            showDetail(car);
        }} type="button" className="btn">{name}</button></td>
        <td>{price}</td>
        <td>{year}</td>
        <td><button data-toggle="modal" data-target="#modifyModal" onClick={e => {
            modifyCarData(car);
        }} type="button" className="btn btn-primary">수정</button></td>
        <td><button onClick={e => {
            removeCarData(car);
        }} type="button" className="btn btn-danger">삭제</button></td>
    </tr>)
}

export default CarItem;