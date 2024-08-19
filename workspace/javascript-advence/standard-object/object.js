class Book {
    constructor(title, author, page) {
        this.title = title;
        this.author = author;
        this.page = page;
    }

    //재정의
    toString() {
        return `${this.title},${this.author},${this.page}`;
    }

    hasOwnProperty(name) {
        return false;

    }
}

const book = new Book("javaScript", "홍길동", 100);
console.log(book.toString());
book.hasOwnProperty("title");

for (const key in book) {
    //혹시라도 hasOwnProperty가 재정의가 잘못되었을경우 원레 hasOwnProperty로 되돌리는 코드
    //Object.hasOwnProperty.call(object, key)는 오버라이딩된 메서드가 아니라 원래 정의된 메서드를 쓰는코드
    if (Object.hasOwnProperty.call(book, key)) {
        const element = book[key];
        console.log(element);
    }
}

//Object의 static 메서드 
//entries는 2차원 배열로 리턴됨
const entries = Object.entries(book);
console.log(entries);

const dog1 = { name: "루니" };
const dog2 = { name: "루니" };
console.log(dog1 === dog2); // 주소값을 비교하는거니까 당연히

console.log(dog1);
console.log(Object.entries(dog1).toString());
console.log(dog2);
console.log(Object.entries(dog2).toString());

console.log(dog1.toString());

//객체와 객체의 프로퍼티와 내용을 비교할때
console.log(Object.entries(dog1).toString() === Object.entries(dog2).toString());