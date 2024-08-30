import { getNews } from "./api.js";

const init = () => {
    // alert('init')

    const bt1 = document.querySelector('#btn1');
    const bt2 = document.querySelector('#btn2');

    const url = `https://www.hankyung.com/feed/it`;

    //한경닷컴 서버로 직접 요청을 보내보자 --> 에러발생 (cors 에러)
    bt1.addEventListener('click', () => {
        axios.get(url)
            .then(response => alert(response))
            .catch(error => alert(`에러: ${error}`));
    })

    const proxy_url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.hankyung.com%2Ffeed%2Fit&api_key=hlon0yhpz6p6vjohniuxkri7qztuf2ewgebwkxow`;

    bt2.addEventListener('click', () => {
        getNews(proxy_url)
            .then(data => {
                showNews(data);
            })
    })

    //맵으로 바꿔보기
    const showNews = (data) => {
        const list = data.items; //배열 데이터
        console.log(list.length);
        const result = document.querySelector(`#newsContainer`);
        //ul li태그 이용해서 title 출력하고, 해당 title에 link걸어주세요
        let str = `<ul>`;

        //반복문 돌면서 str에 누적시키기

        //배열.map(콜백함수) :반환타입 => 새로운 배열을 반환
        //배열을 문자열로 반환하려면: 배열.join(구분자)==>문자열 반환
        const newArr = list.map((item) => {
            //item은 배열에 저장된 값
            const { title, link, pubDate } = item;
            return `
        <li><a href=${link}>${title}</a> 발행일:${pubDate}</li>
        `;
        }).join("");
        str += newArr;

        str += '</ul>'

        result.innerHTML = str;;

    }
}

document.addEventListener('DOMContentLoaded', init())