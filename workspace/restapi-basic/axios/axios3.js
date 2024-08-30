function fetchXml() {
    const url = 'note.xml'; //xml 데이터
    axios.get(url, {
        responseType: 'text' //배열로 받아옴
    })
        .then(response => {
            // alert(response.data);
            const parser = new DOMParser();
            const xml = parser.parseFromString(response.data, 'application/xml') //xml 형태로된 친구를 파싱해서 dom형태로 만들어 준다.

            //note엘리먼트에 접근해보자
            const notes = xml.getElementsByTagName('note'); //여러개니까 배열로 리턴됨
            // alert(notes.length);

            const result = document.querySelector('#result');

            result.innerHTML = `<h2>note 목록</h2>`;
            for (const note of notes) {

                //note 엘리먼트의 no라는 속성값 추출
                const no = note.getAttribute("no");

                const to = note.getElementsByTagName('to')[0].textContent;
                const from = note.getElementsByTagName('from')[0].textContent;
                const heading = note.getElementsByTagName('heading')[0].textContent;
                const body = note.getElementsByTagName('body')[0].textContent;
                // console.log(to);
                result.innerHTML += `
                    <div>
                        <h3>no: ${no}</h3>
                        <h3>to: ${to}</h3>
                        <h3>from: ${from}</h3>
                        <h3>heading: ${heading}</h3>
                        <h3>body: ${body}</h3>
                    </div>
                `;
            }
        })
        .catch(error => alert(error));
}