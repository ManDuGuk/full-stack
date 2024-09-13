let display = 20;
let start = 1;
const baseUrl = 'http://localhost:7777/naver/search/books';

function init() {
    const btnSearch = document.querySelector('#btnSearch');
    const input = document.querySelector('#keyword');
    input.addEventListener('keydown', (event) => {
        //event.keyCode: 엔터의 아스키 코드값 13
        //event.key: 'Enter','Shift'
        console.log(event.key, event.keyCode);

        if (event.key == 'Enter') {
            const query = document.querySelector('#keyword').value;
            if (!query) {
                alert('검색어를 입력하세요');
                document.querySelector('#keyword').focus();
                return;
            }

            const url = `${baseUrl}?query=${query}&display=${display}&start=${start}`;
            // console.log(url);

            send(url, query, 1);
        }
    });

    btnSearch.addEventListener('click', () => {
        const query = document.querySelector('#keyword').value;
        if (!query) {
            alert('검색어를 입력하세요');
            document.querySelector('#keyword').focus();
            return;
        }

        const url = `${baseUrl}?query=${query}&display=${display}&start=${start}`;
        // console.log(url);

        send(url, query, 1);

    })
}

async function send(url, query, page) {
    try {
        const response = await fetch(url); //await 빼먹지 말기 --> 빼먹으면 promise로 반환되지않고 그냥 객체였나 뭐시로 반환되는 경우가 있다. 
        const data = await response.json();
        // alert(JSON.stringify(data));

        //데이터 렌더링
        showList(data, query); //데이터 보여주기
        showPage(data, query, page); //페이지 네비게이션 처리

    } catch (error) {
        alert('fetch error:' + error)
    }
}


function showPage(data, query, page) {

    //page: ==> 현재 보여줄 페이지 번호
    //query: ==> 검색어
    //data: 총게시글수(total),페이지당 보여줄 목록개수(display)

    let { total, display } = data;

    let start = (page - 1) * display + 1; //네이버에 전달할 파라미터 (시작값);
    //검색결과 200개 초과하면  200개로 제한두자
    if (total > 200) {
        total = 200;
    }

    let pageCount = Math.ceil(total / display);
    let str = `<ul class="pagination">`;
    for (let i = 1; i <= pageCount; i++) {

        if (i == page) {
            str += `<li class="page-item active">`;
        } else {
            str += `<li class="page-item">`;
        }

        str += `<a class="page-link" href="#" onclick="fetchData('${query}','${start}','${i}')">${i}</a></li>`;
    }

    str += `</ul>`

    document.getElementById('pageNavi').innerHTML = str;
}

function fetchData(query, start, page) {
    let url = `${baseUrl}?query=${query}&display=${display}&start=${start}`;
    send(url, query, page);
}

function showList(data, query) {

    const { total, display, start, items } = data;
    let str = `<h2>검색어: ${query}검색결과 ${total}개</h2>`;
    str += `
        <table class="table">
            <tr>  
    `;

    items.forEach((book, i) => {
        str += `
        <td width="20%" style="text-align:center">
            <a href=${book.link} target="_blank">
                <img src="${book.image}" class="img-thumbnail" style="width:70%">
            </a>
            <h5>${book.title}</h5>
            <p>
            저자: ${book.author}<br>
            출판사: ${book.publisher}<br>
            </p>
        </td>
        `
        if (i % 5 == 4) {
            str += `</tr><tr>`
        }
    });

    str += `</tr>
    </table>
    `

    document.getElementById('result').innerHTML = str;
}


document.addEventListener('DOMContentLoaded', init())