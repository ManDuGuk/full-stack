function solution(slice, n) {
    let pizzas = 1;
    let minpizza = Math.floor(n / slice);
    if (n % slice > 0) {
        pizzas = minpizza + 1;
    } else {
        pizzas = minpizza
    }

    var answer = pizzas;
    return answer;
}

let result = solution(6, 12);
console.log(result);

