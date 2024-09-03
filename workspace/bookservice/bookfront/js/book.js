const baseUrl = `http://localhost:7777`
const init = () => {
    const btnAll = document.querySelector("#btnAll");
    btnAll.onclick = async () => {
        const url = baseUrl + `/books`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            //데이터 확인후 id가 result인 곳에 데이터 출력하기
            console.log(data);
            let result = document.querySelector("#result");
            const renderData = data.map((element) => {
                return `
                    <tr>
                        <td>${element.isbn}</td>
                        <td>${element.title}</td>
                        <td>${element.publish}</td>
                        <td>${element.price}</td>
                    </tr>
                `
            }).join("");

            result.innerHTML = renderData;
            alert(response.status)
        } catch (error) {
            alert(error.message)
        }
    }
}

document.addEventListener('DOMContentLoaded', init());