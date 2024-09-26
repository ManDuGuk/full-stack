function solution(seoul) {
    //문자열 배열 
    console.log(seoul);

    let position = seoul.findIndex((now) => {
        return now.toLowerCase() == "kim"
    })

    var answer = `김서방은 ${position}에 있다`;
    return answer;
}


let xxx = ["Jane", "Kim"];
console.log(solution(xxx));

;