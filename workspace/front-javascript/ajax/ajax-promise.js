//메세지를 받아오는 역할만 해야한다. dom 처리는 해주면 안됨
//dom 처리는 app에서 해준다.

//1.promise의 비동기 통신함수
// https://jsonplaceholder.typicode.com/posts
export const get = function (url) {

    return new Promise((resolve, reject) => {
        // XMLHttpRequest 통신

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", (event) => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.status);
            }
        });
        xhr.send()

    })
}

// let promise = get("https://jsonplaceholder.typicode.com/posts");
// promise
//     .then((something) => { console.log(something); })



