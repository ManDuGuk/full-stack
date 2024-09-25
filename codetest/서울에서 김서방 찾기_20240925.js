function solution(seoul) {
    //문자열 배열 

    let findperson = "kim";
    seoul.forEach((item, index) => {
        if (item == findperson) return index;
    })

    let index = 0;
    var answer = `김서방은 ${index}에 있다`;
    return answer;
}