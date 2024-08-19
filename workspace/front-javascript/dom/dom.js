const h2Element = document.getElementById("title");
console.dir(h2Element);
h2Element.style.color = "red";

// 유사배열로 리턴한다 --> 유사배열에서 쓸수있는 메서드랑 쓸수 없는 메서드가 있다. 정리할것
// const h2s = document.getElementsByTagName("h2");
// console.log(h2s);
// for (const element of h2s) {
//     // 대부분이렇게
//     element.style.backgroundColor = "yellow"
//     // 이렇게도 가능하다
//     element.style["background-color"] = "yellow"
// }

const h2s = document.getElementsByClassName("lorem");
for (const element of h2s) {
    // 대부분이렇게
    element.style.backgroundColor = "yellow"
    // 이렇게도 가능하다
}
