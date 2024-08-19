//제이슨 --> 메소드는 직렬화 못함, 오로지 데이터만 가능
const user = {
    id: "whatcpu",
    name: "남윤호",
    age: 30,
    foo: function () {
        console.log(this.id);
    }
}

// const json = JSON.stringify(user);
const json = JSON.stringify(user, (key, value) => {
    if (key === "age") {
        return undefined
    }
    return value
});
console.log(typeof json);
console.log(json);

const paseUser = JSON.parse(json);
console.log(typeof paseUser);
console.log(paseUser);

const array = [
    { name: "남윤호" },
    { name: "남윤호" },
    { name: "남윤호" },
    { name: "남윤호" },
]

console.log(JSON.stringify(array, null));