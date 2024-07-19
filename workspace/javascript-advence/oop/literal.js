const empty = {};
console.log(typeof empty);

//대괄호는 프로퍼티를 선언할때도, 호출할때도 쓸수 잇다.
const point = {
    x: 10,
    y: 20,
    ["x-y"]: 30
};


console.log(point);

console.log(point.x);
console.log(point["x"]);
console.log(point['x']);
console.log(point[`x`]);
console.log(point["x-y"]);



//회원 객체 생성
//this의 사용법01 this는 해당 스코프를 포함한 객체를 가르킨다.
//this를 user.name으로 바꿔도 추력은 되지만 나중에 수정하려면 귀찮으니까 this를 많이 선호하는 편이다.
const user = {
    name: "남윤호",
    email: "whatcpu@nave.com",
    address: "경기도",
    buy: function (item) {
        console.log(`${this.name}님이 ${item.name}를 구매하였습니다.`);
    }
}

const item = {
    name: "노트북",
    price: "100만"
};

console.log(user);
console.log(user.name);

user.buy(item);


//동적 프로퍼티 추가
user.id = "hihi";
user.order = function (item) {
    console.log(`${item.name} 상품(${item.price})을 주문하였습니다.`);
}

console.log(user);

//값을 넣듯이 객체도 전달할수 있다.
user.order({
    name: "pc",
    price: 1000
});


//객체의 속성 삭제
if (delete user.id) {
    console.log("id 삭제");
} else {
    console.log("id 삭제실패");
}
