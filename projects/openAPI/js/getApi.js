//일단 url로 요청을 보내서 제이슨 데이터를 가져오고
//그결과를 innerHtml에 뿌려주기

const tbody = document.querySelector('#result');

//키값이 포함된 url --> 불러오는 갯수 5개 세팅함
const url = 'https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=5&pageNo=1&MobileOS=AND&MobileApp=test&serviceKey=YssH2yHSdTKhkaaYIJFFKZEP%2BkykGa%2Bgb10wi4F5hZ%2BaTmuQvsdhy3uhSaRFNpvoaEG%2FVZvBmhaHJao7zf7gvA%3D%3D&_type=json';
const urlSearch = 'https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=5&pageNo=1&MobileOS=ETC&MobileApp=test&serviceKey=YssH2yHSdTKhkaaYIJFFKZEP%2BkykGa%2Bgb10wi4F5hZ%2BaTmuQvsdhy3uhSaRFNpvoaEG%2FVZvBmhaHJao7zf7gvA%3D%3D&_type=json';
const apiKey = 'YssH2yHSdTKhkaaYIJFFKZEP+kykGa+gb10wi4F5hZ+aTmuQvsdhy3uhSaRFNpvoaEG/VZvBmhaHJao7zf7gvA==';

const urlsearch = 'https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=5&pageNo=1&MobileOS=ETC&MobileApp=test&serviceKey=YssH2yHSdTKhkaaYIJFFKZEP%2BkykGa%2Bgb10wi4F5hZ%2BaTmuQvsdhy3uhSaRFNpvoaEG%2FVZvBmhaHJao7zf7gvA%3D%3D&_type=json&keyword=%ED%8C%8C%ED%81%AC%ED%82%B9';


//처음 시작시 전체 목록 조회
window.onload = function () {
    fetch(url)
        .then((response) => {
            // alert(response.ok)
            if (!response.ok) throw new Error('요청이 잘못되었거나 네트워크 문제');
            // console.log('response:' + response); //response오브젝트
            // console.log('response:' + response);
            // console.log('response.json():' + response.json()); //프로미스 오브젝트

            return response.json(); //JSON.parse(xhr.responseText)
        })
        .then((data) => {
            let itemArray = data.response.body.items.item;
            renderUI(data)
        })
        .catch((error) => {
            alert(error);
        })
}

//검색키워드로 버튼글릭시 ajax로 불러와서 다시 렌더링
const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', () => {

    event.preventDefault();

    let keyword = search.keyword.value;
    let encoded = encodeURIComponent(keyword);


    let newUrl = urlSearch + `&keyword=${encoded}`;
    console.log(newUrl);
    fetch(newUrl)
        .then((response) => {
            console.log(response);

            // alert(response.ok)
            if (!response.ok) throw new Error('요청이 잘못되었거나 네트워크 문제');
            return response.json(); //JSON.parse(xhr.responseText)
        })
        .then((data) => {
            // let itemArray = data.response.body.items.item;
            renderUI(data)
        })
        .catch((error) => {
            alert(error);
        })

})

//레더링 함수는 그대로 두고
const renderUI = (data) => {
    tbody.innerHTML = "";

    let itemArray = data.response.body.items.item;

    let str = "";

    //반복문
    itemArray.forEach(element => {
        str += `
        <tr>
            <td>${element.contentId}</td>
            <td>${element.facltNm}</td>
            <td>${element.featureNm}</td>
            <td>${element.induty}</td>
            <td>${element.doNm}</td>
            <td>${element.addr1}</td>
            <td>${element.mapX}</td>
            <td>${element.mapY}</td>
            <td>${element.tel}</td>
            <td>${element.homepage}</td>
            <td>${element.firstImageUrl}</td>
        </tr>
        `;
    });

    tbody.innerHTML = str;

}


