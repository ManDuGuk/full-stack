const profile = document.querySelector("#profile");
console.log(profile.constructor);
console.log(profile);

document.querySelector("h2");

//유사배열인데 foreach를 사용할수 있도록 만들어놨다.
const nodeList = document.querySelectorAll("h2");
console.log(nodeList);
let h2 = nodeList[1];
h2 = nodeList.item(1);

nodeList.forEach(element => {
    element.style.color = "#fff000";
});

const list = document.querySelector("#list");
console.log(list.children);
console.log(list.childNodes); //빈공간 포함하기때문
console.log(list.childNodes[1]); //빈공간 포함하기때문
console.log(list.firstElementChild); //빈공간 포함하기때문
console.log(list.lastElementChild); //빈공간 포함하기때문
console.log(list.parentElement); //빈공간 포함하기때문

console.log(list.children[1].previousElementSibling);
console.log(list.children[1].nextElementSibling);


// 요소의 내용 접근 //태그와 빈공간까지 모두 가져온다.
console.log(list.firstElementChild.innerHTML);

//순수한 텍스트만 가져온다.
console.log(list.firstElementChild.textContent);

//자기자신을 포함한 모든 요소가져오기
console.log(list.firstElementChild.outerHTML);

//요소 수정
list.lastElementChild.textContent = "자바스크립트";
list.lastElementChild.innerHTML = "<b>자바스크립트</b>";

list.lastElementChild.innerHTML = "";
