const createUser = function (name, email, address) {
    const user = {
        name,
        email,
        address,
        buy() {
            console.log(`${this.name}님 상품을 구매하였습니다.`);
        }
    }

    return user;
};



const nam = createUser("남윤호2", "naver", "경기도");
const { myName, age, speak } = nam;