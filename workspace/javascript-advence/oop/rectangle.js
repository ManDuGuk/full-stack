const rectangle = {
    width: 200,
    height: 100,
    //단축 메소드
    area() {
        return this.width * this.height;
    }
};

console.log(rectangle.area());