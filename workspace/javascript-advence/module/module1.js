let title = "모듈 사용하기";
const MAX_VOLUME = 100;
const sum = (x, y) => {
    return x + y;
}

const user = {
    id: "bangry",
    name: "김기정",
    toString() {
        return `아이디:${this.id}, 이름:${this.name}`
    }
};

//모듈내보내기 --> 코드 위치 상관없음
//모듈은 내가 내보내고 싶은것만 내보낼수 있으며, 해당 변수나 함수의 식별자를 내보내면 된다.
// console.log(module);
//module 명령어를 통해서 내보내면 통으로 내보낸다. export를 한번에 덮어쓴다.
//module 명령어를 통해서 내보내면 export객체 안에 들어가는게 아니라 export 자체를 덮어쓰는 거여서 어떤 형식으로 보내는지는 자신의 자유이다.
//그럼 객체가 아니라 배열로 보내주면 배열로 가져와 사용할수 있는건가?
// module.exports = {
//     title,
//     MAX_VOLUME,
//     sum,
//     user
// }

//하나씩 내보낼때는 exports 명려어만 가지고 내보낼수 있다. 위와 다르게 하나씩 추가된다는 개념이다.
exports.title = title;
exports.MAX_VOLUME = MAX_VOLUME;
exports.sum = sum;
exports.user = user;


//선언이나 초기화 하면서 바로 내보낼수도 있다.
//그런데 이건 title2가 모듈안에 선언되고 초기화된거지 module1.js안에 초기화된게 아니다. 
module.exports.title2 = "바로 내보내기";
// console.log(title2); //이렇게 하면 오류나것이다.


