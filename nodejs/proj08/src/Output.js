const Output = ({ cars, deleteCarArray, startEdit, getInputVal, selectedCar, setSelectedCar, checkClick }) => {
    return (
        <>
            <tr style={{ opacity: cars.opacity }}>
                <td><input type="checkbox" onChange={(e) => { checkClick(cars) }}></input></td>
                <td>{cars._id}</td>
                <td>{cars.name}</td>
                <td>{cars.price}</td>
                <td>{cars.company}</td>
                <td>{cars.year}</td>
                <td><button onClick={(e) => { startEdit(cars, getInputVal); setSelectedCar(cars) }}>edit</button><button style={{ marginLeft: "5px" }} onClick={(e) => { deleteCarArray(cars) }}>Delete</button></td>
            </tr >
        </>
    )
}
export default Output;