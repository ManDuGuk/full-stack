function solution(dot) {

    let x = dot[0], y = dot[1];
    if (x * y > 0) {
        //1,3경우
        return x > 0 ? 1 : 3;
    } else {
        //2,4경우
        return y > 0 ? 2 : 4;
    }

}

// let xx = [2, 4]
let xx = [-7, 9]
console.log(solution(xx));
