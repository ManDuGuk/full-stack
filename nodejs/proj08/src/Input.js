

const Input = ({ getInputVal, setInputVal, setCarListPlus, editDon, selectedCar }) => {
    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Something clever.." onChange={(e) => { setInputVal(e.target.value) }} value={getInputVal} />
                <div className="input-group-append">
                    {/* 버튼클릭이벤트 설정 */}
                    <button className="btn btn-primary" type="button" onClick={(e) => setCarListPlus(getInputVal)}>새로등록</button>
                    <button className="btn btn-success" type="button" onClick={(e) => { editDon(getInputVal, selectedCar) }}>수정완료</button>
                </div>
            </div>
        </>
    )
}
export default Input;