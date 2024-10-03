

const CarItem = ({ car, showDetail, modifyCarData, removeCarData }) => {
    const { id, name, price, maker } = car;

    return (<tr>
        <td>{id}</td>
        <td><button data-toggle="modal" data-target="#detailModal" onClick={e => {
            // showDetail(car);
        }} type="button" className="btn">{name}</button></td>
        <td>{maker}</td>
        <td>{price}</td>
        <td><button data-toggle="modal" data-target="#modifyModal" onClick={e => {
            // modifyCarData(car);
        }} type="button" className="btn btn-primary">수정</button></td>
        <td><button onClick={e => {
            // removeCarData(car);
        }} type="button" className="btn btn-danger">삭제</button></td>
    </tr>)
}

export default CarItem;