
//모듈시스템은 무조건 상대경로만 쓴다. 확장자는 생략하고 쓸수 있다.
//아래와 같이 써도 되는데 쓰기 힘드니까, 구조분해 할당 해버리고 많이 쓴다.
const object = require("./module1");
console.log(object);
console.log(object.title);
console.log(object.sum(10, 20));
console.log(object.user.toString());

//구조분해 할당, title:별칭 이런식으로 별칭도 줄수있다.
const { title, MAX_VOLUME, sum, user } = require("./module1");
console.log(title);
console.log(sum(10, 20));


console.log(object.title2);