// 가상의 계시판 목록
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json(); //1.제이슨을 parse로 객체화 시켜줌 //2.제이슨이 parse된걸 프로미스로 감싸서 반환해줌 
    })
    .then((json) => {
        console.log(json); //객체배열로 리턴됨?
        console.log(typeof json);
        console.log(typeof json[0]);
        console.log(json[0].userId); //1 출력됨
        console.log(typeof json[0].userId); //number들어감 
    })
    .catch(console.log);